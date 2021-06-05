export declare abstract class Animal {
    protected abstract breath(): void;
    move(): void;
}
export declare class Cat extends Animal {
    breath(): void;
}
export declare class Dog extends Animal {
    protected breath(): void;
    makeSound(): void;
    run(): void;
}
