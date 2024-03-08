import { defineChain } from 'viem';

export const shibuya = defineChain({
	id: 81,
	name: 'Shibuya',
	nativeCurrency: {
		decimals: 18,
		name: 'Shibuya',
		symbol: 'SBY'
	},
	rpcUrls: {
		default: {
			http: ['https://evm.shibuya.astar.network'],
			webSocket: ['wss://rpc.shibuya.astar.network']
		}
	},
	blockExplorers: {
		default: { name: 'Shibuya Subscan', url: 'https://shibuya.subscan.io/' }
	}
});
