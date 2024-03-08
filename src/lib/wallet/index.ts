import WalletConnection from './WalletConnection';
import { browser } from '$app/environment';

export const walletConnect = new WalletConnection();

/**
 * @description reference this promise with await on the top of onMount() to guarantee completion of {@link walletConnect} initialization
 * @example
 * onMount(async () => {
 * 	// first line in the onMount()
 * 	await walletConnectInitialized();
 * 
 * 	// ...rest of the code
 * })
 */
export let walletConnectInitialized: Promise<void>;

if (browser) {
	walletConnectInitialized = walletConnect.initializeWallet();
}
