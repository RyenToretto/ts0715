import { addAge, cannotWrite } from './decorator'

@addAge
export class Person {
    name: string;
    age!: number; // 告诉 ts编译器，此处一定有值
    constructor(name: string) {
        this.name = name;
    }

    @cannotWrite
    say() {
        return 'instance method';
    }

    @cannotWrite
    static run(){
        return 'static method';
    }
}

// 1. @expression 装饰器本质上是一个函数
// 2. expression 求值后必须也是一个函数，它会在运行时被调用
// 3. 被装饰的 { 声明信息 } 做为参数传入.

// 所以，这段代码实际上基本等同于：
// Person = addAge(function Person() { ... });
