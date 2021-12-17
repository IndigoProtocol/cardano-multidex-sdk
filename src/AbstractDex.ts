import {Token} from "./models/Token";
import {LiquidityPool} from "./models/LiquidityPool";
import {LiquidityPosition} from "./models/LiquidityPosition";
import {Cardano} from "@cardano-sdk/core";
import {Wallet} from "@cardano-sdk/wallet";

/**
 * An abstract DEX meant to be extended for an implementation for a Cardano DEX.
 */
export abstract class AbstractDex {

    /**
     * Swap aToken for bToken.
     */
    abstract swap(wallet: Wallet, aToken: Token, bToken: Token, aAmount: number, bAmount: number, slippage?: number): Promise<void>;

    /**
     * Fetch the DEX liquidity pool.
     */
    abstract liquidityPools(): Promise<LiquidityPool[]>;

    /**
     * Fetch the liquidity positions for a wallet.
     */
    abstract liquidityPositions(wallet: Cardano.Bip32PublicKey): Promise<LiquidityPosition[]>;

    /**
     * Deposit to Liquidity Pool.
     */
    abstract lpDeposit(wallet: Wallet, lp: LiquidityPool, aAmount: number, bAmount: number): Promise<void>;

    /**
     * Withdraw from Liquidity Pool.
     */
    abstract lpWithdraw(wallet: Wallet, lp: LiquidityPool, aAmount: number, bAmount: number): Promise<void>;
}
