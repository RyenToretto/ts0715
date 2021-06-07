import { mixinObject } from './modules/shared/helpers'
import { User, userTest } from './modules/user'
import { animalTest } from './modules/animal'
import { cssDirectionTest } from './modules/css-direction'
import { dataStructureTest } from './modules/data-structure'
import { personTest } from './modules/person'
import { reflectMetaDataTest } from './modules/reflectMetaData'
import { ElementOf, FunctionPropertyNames, NullableKeys } from './modules/shared/entries'

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

    /**** 7. 【Reflect Metadata】添加和读取元数据 ****/
    reflectMetaDataTest()

    /**** 8. 【Reflect Metadata】添加和读取元数据 ****/
    interface Part {
        id: number;
        name: string[];
        updatePart(newName: string): void;
    }
    type Names = FunctionPropertyNames<Part>; // 将 interface 中函数类型的名称

    interface People {
        id: string
        name: string
        age?: number
        from?: string
    }
    type Keys = NullableKeys<People> // type Keys = "age" | "from"

    /**** 9. 使用 infer ： 获取数组元素的类型 ****/
    type ATuple = [string, number];
    type ElementOfATuple = ElementOf<ATuple>; // string | number
}

export default {
    xiaoCeTest
}
