export interface AssetBech32 {
    asset: string
}

export interface AssetClass {
    policyId: string;
    assetName: string;
}

export type Token = AssetClass | AssetBech32;
