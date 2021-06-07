/**
 * Reflect Metadata 属于 ES7 的一个提案
 *      主要作用: 在声明的时候「添加和读取元数据」
 *      使用：
 *          1）npm i reflect-metadata --save
 *          2）在 tsconfig.json 中配置 "emitDecoratorMetadata": true,
 * */
import 'reflect-metadata'

import { HelloClass, Article} from '../entries'
import { PATH_METADATA, mapRoute } from '../entries/decorator'

export const reflectMetaDataTest = () => {
    // 2. 获取元数据
    Reflect.getMetadata('name', HelloClass); // 'kjf'
    Reflect.getMetadata('time', new HelloClass, 'hello'); // '20210607'

    // 3. 内置元数据
    // 3.1 [design:type] 作为key，可以获取到目标的类型
    const type = Reflect.getMetadata("design:type", new HelloClass, 'hello') // [Function: Function]

    // 3.2 [design:paramtypes] 作为key，可以获取到参数的类型
    const typeParam = Reflect.getMetadata("design:paramtypes", new HelloClass, 'hello') // [Function: String]

    // 3.3 [design:returntype] 作为key，可以获取到返回值的类型
    const typeReturn = Reflect.getMetadata("design:returntype", new HelloClass, 'hello') // [Function: String]

    // 4.
    console.log(Reflect.getMetadata(PATH_METADATA, Article))

    const info = mapRoute(new Article());
    console.log(info);
}
