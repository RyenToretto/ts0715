interface ReturnItemFn<T> {
    (para: T): T;
}
export declare const returnItem: ReturnItemFn<any>;
export declare const returnItemString: ReturnItemFn<string>;
export declare const returnItemNumber: ReturnItemFn<number>;
export declare function swapTuple<T, U>(tupleArray: [T, U]): [U, T];
export declare function printArrayLength<T>(arg: Array<T>): Array<T>;
export declare function getValue<Obj extends object, K extends keyof Obj>(obj: Obj, key: K): Obj[K];
export {};
