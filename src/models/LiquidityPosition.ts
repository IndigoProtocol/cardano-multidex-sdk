import {Token} from "./Token";

export interface LiquidityPosition {
    aToken: Token;
    aAmountPooled: number;
    bToken: Token;
    bAmountPooled: number;
    lpAmount: number;
}
