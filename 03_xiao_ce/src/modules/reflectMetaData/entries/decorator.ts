/**
 * 在计算机科学中，柯里化（英语：Currying），又译为卡瑞化或加里化，
 *      是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，
 *      并且返回接受余下的参数而且返回结果的新函数的技术
 * */
import {isConstructor, isFunction} from '../../shared/helpers'

export const METHOD_METADATA = 'method'
export const PATH_METADATA = 'path'

// 装饰器工厂函数, 接受路由的路径path返回一个装饰器
export const Controller = (path: string): ClassDecorator => {
    return target => {
        Reflect.defineMetadata(PATH_METADATA, path, target);
    }
}

// 装饰器工厂函数,首先接受一个方法,比如get/post,如何再接受一个路由路径,返回一个携带了上述两个信息的装饰器
export const createMappingDecorator = (method: string) => (path: string): MethodDecorator => {
    return (target, key, descriptor) => {
        Reflect.defineMetadata(PATH_METADATA, path, descriptor.value!);
        Reflect.defineMetadata(METHOD_METADATA, method, descriptor.value!);
    }
}

export function mapRoute(instance: Object) {
    const prototype = Object.getPrototypeOf(instance);

    // 筛选出类的 methodName
    const methodsNames = Object.getOwnPropertyNames(prototype)
        .filter(item => !isConstructor(item) && isFunction(prototype[item]));

    return methodsNames.map(methodName => {
        const fn = prototype[methodName];

        // 取出定义的 metadata
        const route = Reflect.getMetadata(PATH_METADATA, fn);
        const method = Reflect.getMetadata(METHOD_METADATA, fn);
        return {
            route,
            method,
            fn,
            methodName
        }
    })
};

