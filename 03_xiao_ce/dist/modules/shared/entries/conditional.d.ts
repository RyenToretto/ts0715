export declare type FunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];
export declare type NullableKeys<T> = {
    [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];
