import { createWalletClient, http, type Hex, type Chain } from 'viem';
import WalletConnection from './WalletConnection';
import { privateKeyToAccount } from 'viem/accounts';
import { shibuya } from './chains/shibuya';

export interface ITestWalletConnection extends Pick<WalletConnection,'connectWallet' | 'walletStore' | 'walletClient'>{}

export class TestWalletConnection extends WalletConnection implements ITestWalletConnection{
	private _privateKey: Hex;

	constructor(_privateKey: Hex) {
		super();
		this._privateKey = _privateKey;
	}

    async connectWallet(): Promise<void> {
        const account = privateKeyToAccount(this._privateKey)

        // set wallet client
        this._walletClient = createWalletClient({
            account,
            transport: http(),
            chain: shibuya
        })

        // update store
        this._walletStore.update((items)=>({
            account_address: account.address,
            isConnectAddress: true,
        }))
    }

    async isCurrentChain(chain: Chain): Promise<boolean> {
        if (this._walletClient!.chain === undefined) throw new Error('chain === undefined')
        
        return this._walletClient!.chain.id === chain.id 
    }
}
