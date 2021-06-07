// 声明装饰器 --->修饰 class
export function addAge(constructor: Function) {
    constructor.prototype.age = 18; // 在每一个实例化对象上面添加一个 age 值 = 18
}

// 声明装饰器 --->修饰方法/属性
export function cannotWrite(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target);
    console.log("prop " + propertyKey);
    console.log("desc " + JSON.stringify(descriptor) + "\n\n");
    descriptor.writable = false;
}

// 参数装饰器 --->修饰参数
export function logParameter(target: any, propertyKey: string, index: number) {
    console.log('--- logParameter --->', target, propertyKey, index);
}
