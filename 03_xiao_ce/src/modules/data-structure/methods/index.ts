// 在静态编写的时候并不确定传入的参数到底是什么类型
// 只有当在运行时传入参数后我们才能确定
// 变量代表了传入参数的类型，然后再返回这个变量
// 它是一种特殊的变量，只用于表示类型而不是值。

// 泛型也可用于接口声明
interface ReturnItemFn<T> {
    (para: T): T
}

export const returnItem: ReturnItemFn<any> = <T>(para: T): T => { // 这个类型变量 T 在 TypeScript 中就叫做「泛型」。
    return para
}

export const returnItemString: ReturnItemFn<string> = <T>(para: T): T => { // 这个类型变量 T 在 TypeScript 中就叫做「泛型」。
    return para
}

export const returnItemNumber: ReturnItemFn<number> = <T>(para: T): T => { // 这个类型变量 T 在 TypeScript 中就叫做「泛型」。
    return para
}

// 多个类型参数
export function swapTuple<T, U>(tupleArray: [T, U]): [U, T] {
    return [tupleArray[1], tupleArray[0]];
}

// 泛型变量 T 当做类型的一部分使用，而不是整个类型，增加了灵活性。
export function printArrayLength<T>(arg: Array<T>): Array<T> {
    console.log(arg.length) // 类型“T”上不存在属性“length”
    return arg
}

// 泛型 来表示传入的对象类型，比如 <T extends object>
// 索引类型  keyof T 把传入的对象的属性类型取出生成一个联合类型
export function getValue<Obj extends object, K extends keyof Obj>(obj: Obj, key: K) {
    return obj[key]
}
