import {Token} from "./Token";

export interface LiquidityPool {
    aToken: Token;
    aAmountLocked: number;
    bToken: Token;
    bAmountLocked: number;
    lpToken: Token;
}
