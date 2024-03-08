import type { Chain } from "viem";

export class ChainNotFoundInWallet extends Error {
    constructor(chain: Chain) {
        super(`Chain ${chain.id} not found in wallet. Please add the chain to your wallet first.`)
        this.name = this.constructor.name;
    }
}