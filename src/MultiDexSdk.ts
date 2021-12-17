import {DexProvider} from "./DexProvider";

export class MultiDexSdk {
    private static _providers: DexProvider[] = [];

    static get providers(): DexProvider[] {
        return MultiDexSdk._providers;
    }

    static addProvider(provider: DexProvider): void {
        MultiDexSdk._providers.push(provider);
    }
}

// TODO: Load all implementations from "./impl" into static MultiDexSdk
