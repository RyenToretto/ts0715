import { User, userTest } from './modules/user'
import { animalTest } from './modules/animal'
import { cssDirectionTest } from './modules/css-direction'
import { dataStructureTest } from './modules/data-structure'
import { mixinObject } from './modules/shared/helpers'
import {personTest} from './modules/person/test'

const xiaoCeTest = () => {
    /**** 1. 函数约束 ****/
    function greeter(person: User): string {
        return "Hello, " + person.name
    }
    const theUser = userTest()
    greeter(theUser);

    /**** 2. 抽象类、类继承、访问限定符 ****/
    animalTest()

    /**** 3. 函数重载 ****/
    cssDirectionTest()

    /**** 4. 泛型 ****/
    dataStructureTest()

    /**** 5. 高级类型 <交叉类型 &> ****/
    const x = mixinObject({ a: 'hello' }, { b: 42 });
    console.log(x.a, x.b) // 现在 x 拥有了 a 属性与 b 属性

    /**** 6. 装饰器 ****/
    personTest()
}

export default {
    xiaoCeTest
}
