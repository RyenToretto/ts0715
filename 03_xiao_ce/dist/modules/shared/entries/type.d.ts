export declare type NumberOrString = Number | string;
export declare type ElementOf<T> = T extends Array<infer E> ? E : never;
