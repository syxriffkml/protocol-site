import { MultipleSubject, type IObserver } from '$lib/shared/observer/interfaces';
import detectEthereumProvider from '@metamask/detect-provider';
import { get, writable, type Writable } from 'svelte/store';
import {
	zeroAddress,
	type Address,
	type Hex,
	hexToNumber,
	type Chain,
	toHex,
	type WalletClient,
	createWalletClient,
	custom} from 'viem';
import 'viem/window';

interface WalletDetail {
	isConnectAddress: boolean;
	account_address: Address;
}

export default class WalletConnection extends MultipleSubject {
	protected _walletStore: Writable<WalletDetail>;
	protected _walletClient: WalletClient | undefined = undefined;

	protected static notConnected: WalletDetail = {
		account_address: zeroAddress,
		isConnectAddress: false
	};

	protected accountChangedObservers: IObserver[] = [];
	protected chainChangedObservers: IObserver[] = [];

	constructor() {
		super();
		this._walletStore = writable(WalletConnection.notConnected);
	}

	get walletStore() {
		const { subscribe } = this._walletStore;

		return { subscribe };
	}

	get walletClient(): WalletClient | undefined {
		return this._walletClient;
	}

	private _setWalletClient() {
		if (window.ethereum) {
			this._walletClient = createWalletClient({
				transport: custom(window.ethereum)
			});
		} else {
			this._walletClient = undefined;
		}
	}

	async enforceChain(chain: Chain) {
		if ((await this._getCurrentChain()) !== chain.id) {
			try {
				await this.switchToChain(chain);
			} catch (error) {
				// if chain is not found in wallet
				if (typeof error === 'object' && 'code' in error! && error.code === 4902) {
					// throw new ChainNotFoundInWallet(chain);
					await this.addChainToMetamask(chain);
					await this.switchToChain(chain);
				}
			}

			if ((await this._getCurrentChain()) !== chain.id)
				throw new Error(`Error connecting to chainId ${chain.id}`);
		}
	}

	async isCurrentChain(chain: Chain): Promise<boolean> {
		return (await this._getCurrentChain()) === chain.id;
	}

	private async enforceProvider() {
		if ((await detectEthereumProvider({ silent: true })) == null) {
			throw Error('Metamask is not installed!');
		}
	}

	protected async isConnected() {
		return (
			get(this._walletStore).isConnectAddress == true &&
			get(this._walletStore).account_address != zeroAddress &&
			get(this._walletStore).account_address === (await this.getAddresses())[0]
		);
	}

	private async getAddresses() {
		return (await window.ethereum!.request({
			method: 'eth_accounts'
		})) as Address[];
	}

	private async requestAddresses() {
		await window.ethereum!.request({
			method: 'eth_requestAccounts'
		});

		return this.getAddresses();
	}

	private async checkSession() {
		// return if no wallet extension
		try {
			await this.enforceProvider();
		} catch (error) {
			return;
		}

		const list_connected_address = await this.getAddresses();

		if (list_connected_address.length > 0) {
			// update store
			this._walletStore.update(() => ({
				account_address: list_connected_address[0],
				isConnectAddress: true
			}));
		}
	}

	/**
	 * Switch network to current chain. Must be called within TRY..CATCH
	 * @throws Error if chain is not recognized/added in Metamask
	 */
	async switchToChain(chain: Chain) {
		await window.ethereum!.request({
			method: 'wallet_switchEthereumChain',
			params: [
				{
					chainId: toHex(chain.id)
				}
			]
		});
	}

	/**
	 * Add current chain to Metamask. Must be called within TRY..CATCH
	 * @throws Error if chain is not recognized/added in Metamask
	 */
	async addChainToMetamask(chain: Chain) {
		type ChainMetadata = {
			chainId: Hex;
			chainName: string;
			rpcUrls: string[];
			nativeCurrency: {
				name: string;
				symbol: string;
				decimals: number;
			};
			blockExplorerUrls: string[];
		};

		let chainMetadata: ChainMetadata = {
			chainId: toHex(chain.id),
			chainName: chain.name,
			rpcUrls: chain.rpcUrls.default.http.map((value) => value),
			nativeCurrency: {
				name: chain.nativeCurrency.name,
				symbol: chain.nativeCurrency.symbol,
				decimals: chain.nativeCurrency.decimals
			},
			blockExplorerUrls: []
		};

		const blockExplorerUrl = chain.blockExplorers?.default.url;

		if (blockExplorerUrl) {
			chainMetadata.blockExplorerUrls.push(blockExplorerUrl);
		}

		await window.ethereum!.request({
			method: 'wallet_addEthereumChain',
			params: [chainMetadata]
		});
	}

	async connectWallet() {
		await this.enforceProvider();

		// only runs when wallet is not connected || account changed
		if (!(await this.isConnected())) {
			// connect wallet
			await this._connectWallet();
		}

		// set wallet client
		this._setWalletClient();
	}

	private async _connectWallet() {
		const accounts = await this.requestAddresses();

		if (accounts.length > 0) {
			const connected_address = accounts[0];

			// update store
			this._walletStore.update(() => ({
				account_address: connected_address,
				isConnectAddress: true
			}));

			return connected_address;
		}

		throw Error('User does not connect wallet');
	}

	private async _getCurrentChain() {
		return hexToNumber(
			(await window.ethereum!.request({
				method: 'eth_chainId'
			})) as Hex
		);
	}

	async disconnectWallet() {
		// only runs when wallet is connected
		if (!(await this.isConnected())) return;

		// revoke permission
		await window.ethereum!.request({
			// @ts-ignore
			method: 'wallet_revokePermissions',
			params: [
				{
					eth_accounts: {}
				}
			]
		});

		// update store
		this._walletStore.update(() => WalletConnection.notConnected);
	}

	async initializeWallet() {
		await this.enforceProvider();

		// set wallet client
		this._setWalletClient();

		// check if there is an account connected to the dapp
		await this.checkSession();

		// listen to wallet event
		window.ethereum!.on('accountsChanged', (accounts: Address[]) =>
			this.handleAccountsChanged(accounts)
		);

		window.ethereum!.on('chainChanged', () => this.handleChainChanged());
	}

	private async handleAccountsChanged(accounts: Address[]) {
		if (accounts.length === 0) {
			// update store to null
			this._walletStore.update(() => WalletConnection.notConnected);
		} else {
			if (!(await this.isConnected())) {
				const connected_address = accounts[0];

				// update store to current address
				this._walletStore.update(() => ({
					account_address: connected_address,
					isConnectAddress: true
				}));
			}
		}

		// notify observer
		await this.notifyAccountChangedObserver();
	}

	addAccountChangedObserver(observer: IObserver): void {
		this.addObserver(observer, this.accountChangedObservers);
	}

	removeAccountChangedObserver(observer: IObserver): void {
		this.removeObserver(observer, this.accountChangedObservers);
	}

	private async notifyAccountChangedObserver(): Promise<void> {
		await this.notifyObserver(this.accountChangedObservers);
	}

	addChainChangedObserver(observer: IObserver): void {
		this.addObserver(observer, this.chainChangedObservers);
	}

	removeChainChangedObserver(observer: IObserver): void {
		this.removeObserver(observer, this.chainChangedObservers);
	}


	private async handleChainChanged() {
		// default wallet behaviour when chain is changed
	}
}
