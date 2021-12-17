import {AbstractDex} from "./AbstractDex";

export interface DexProvider {
    /**
     * The name of the DEX provider.
     */
    name(): string;

    /**
     * The version of the DEX provider.
     */
    version(): string;

    /**
     * Abstract DEX implementation.
     */
    impl(): typeof AbstractDex;
}
