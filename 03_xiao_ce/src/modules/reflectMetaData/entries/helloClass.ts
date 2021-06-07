import 'reflect-metadata'

// 1. 设置元数据
@Reflect.metadata('name', 'kjf')
export class HelloClass {
    name: string = 'hello'

    @Reflect.metadata('time', '20210607')
    public hello(): string {
        return `${this.name}, world~`
    }
}
