import { NumberOrString } from '../../../shared/entries'

export class NumberStack {
    private arr: number[] = []

    public push(item: number) {
        this.arr.push(item)
    }

    public pop(): number | undefined {
        return this.arr.pop()
    }
}

export class CustomStack<T> {
    private arr: T[] = []

    public push(item: T) {
        this.arr.push(item)
    }

    public pop(): T | undefined {
        return this.arr.pop()
    }
}

// =====  =====
// 用 <T extends xx> 的方式[约束泛型]，
// 当传入 boolean 类型, 或则其他类型的时候，就会报错
// 比如下图显示我们约束泛型为 number 或者 string 之一
export class NumberOrStringStack<T extends NumberOrString> {
    private arr: T[] = []

    public push(item: T) {
        this.arr.push(item)
    }

    public pop(): T | undefined {
        return this.arr.pop()
    }
}
