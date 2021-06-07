export type NumberOrString = Number | string
export type ElementOf<T> = T extends Array<infer E> ? E : never;
