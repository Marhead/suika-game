import 'matter-js';

declare module 'matter-js' {
    interface IBodyDefinition {
        index?: any;
    }
    interface Body {
        index?: any;
    }
}
