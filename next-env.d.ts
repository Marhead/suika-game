/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
import { IBodyDefinition } from 'matter-js';

declare module 'matter-js' {
    interface IBodyDefinition {
        index?: number;
    }

    interface Body {
        index?: number;
    }
}
