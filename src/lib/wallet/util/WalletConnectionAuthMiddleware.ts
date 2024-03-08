import type WalletConnection from '$lib/wallet/WalletConnection';
import { get } from 'svelte/store';
import type { Chain } from 'viem';

export default abstract class WalletConnectionAuthMiddleware {
	protected async _validateWalletConnection(
		walletConnection: WalletConnection,
		contractChain: Chain
	) {
		await this._validateWalletAlreadyConnected(walletConnection);
		await this._validateWalletClient(walletConnection);
		await this._validateWalletChain(walletConnection, contractChain);
	}

	protected async _validateWalletAlreadyConnected(walletConnection: WalletConnection) {
		if (!get(walletConnection.walletStore).isConnectAddress)
			throw new Error('Must connect wallet first!');
	}

	protected async _validateWalletClient(walletConnection: WalletConnection) {
		if (walletConnection.walletClient === undefined) throw new Error('walletClient === undefined');
	}

	protected async _validateWalletChain(walletConnection: WalletConnection, contractChain: Chain) {
		if (!(await walletConnection.isCurrentChain(contractChain)))
			throw new Error(`walletClient.chain !== contractChain (${contractChain.name})`);
	}
}
