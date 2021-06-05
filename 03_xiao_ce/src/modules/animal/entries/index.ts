/**
 * 抽象类 <做为其它派生类的基类使用>
 *     不能直接实例化抽象类, 通常需要我们创建子类继承基类,然后可以实例化子类
 *     不同于接口, 抽象类可以包含成员的实现细节。
 */
export abstract class Animal { // abstract 定义抽象类

    // abstract 在抽象类内部定义抽象方法
    protected abstract breath(): void;

    move(): void {
        this.breath()
        console.log('前走一小步');
    }
}

// 创建子类继承基类
export class Cat extends Animal {
    breath() {
        console.log('hu~u~wu~');
    }
}

// 访问限定符 <public、private、protected>
export class Dog extends Animal {
    // protected <只可以被类的内部以及类的子类访问>
    protected breath() {
        console.log('ha~~uh~ha~uh~');
    }

    // public <成员都默认为 public, 被此限定符修饰的成员是可以被外部访问。>
    makeSound () {
        this.breath();
        console.log('wang~wang~');
    }
    public run() {
        this.breath();
        console.log('dog is running');
    }
}
