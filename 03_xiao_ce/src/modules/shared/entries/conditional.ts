export type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T]
export type NullableKeys<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T]
