/** 装饰器
 * 主要作用：给一个已有的方法或类扩展一些新的行为，而不是去直接修改它本身
 * 背景：
 *      在 ES2015 进入 Class 之后,
 *      当我们需要在多个不同的类之间共享或者扩展一些方法或行为的时候，
 *      代码会变得错综复杂，极其不优雅，这也就是装饰器被提出的一个很重要的原因.
 *      目前处于<草案阶段>
 *          | stage0    展示阶段
 *          | stage1    征求意见阶段
 *          | stage2    草案阶段
 *          | stage3    候选人阶段
 *          | stage4    定案阶段
 *          所以在 JavaScript 中，我们需要 Babel 插件来支持
 *              babel-plugin-transform-decorators-legacy
 *          在 Typescript 中我们需要在 tsconfig.json 里面开启支持选项
 *              "experimentalDecorators": true
 * 本质：
 *      装饰器本质上是一个函数,
 *      @expression 的形式其实是一个语法糖,
 *      expression 求值后必须也是一个函数
 *          它会在运行时被调用
 *          被装饰的声明信息做为参数传入.
 *          ps: Class 其实也是一个语法糖
 *              class Person{
                    say() {
                        console.log('hello')
                    }
                }
            相当于
                function Person() {}
                Object.defineProperty(Person.prototype, 'say', {
                    value: function() { console.log('hello'); },
                    enumerable: false,
                    configurable: true,
                    writable: true
                });
 * ****/
import { Person } from '../entries'

export const personTest = () => {
    // new 一个对象的时候，会调用 装饰器 函数，然后执行
    let personK = new Person('kjf');
    console.log(personK.age); // 18

    const personW = new Person('wy');
    personW.say = function() { // 修改实例方法say
        return 'edit'
    }
    console.log(personW.say()); // 打印结果,检查是否成功修改实例方法
}
