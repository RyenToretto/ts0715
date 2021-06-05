## 学习掘进 typescript 小册

### 1. 用 npm 将目录初始化
```
    npm init
    npm i -D typescript
```

---
### 2. 使用 TypeScript 的话通常也需要初始化
```
    tsc --init
```

---
### 3. package.json 修改命令
```
    "scripts": {
        "build": "tsc", // 编译
        "build:w": "tsc -w" // 监听文件，有变动即编译
    },
```

---
### 4. 易忘易混淆的知识点：下面两点仅仅名字相似而已
- 属性或参数中使用 <?:> 表示该属性或参数为可选项
- 属性或参数中使用 <!:> 表示强制解析（告诉typescript编译器，这里一定有值）
- 遍历后面使用 <!:> 表示类型推断排除 null、undefined

### 4. 易忘易混淆的知识点：下面两点仅仅名字相似而已
```typescript
// 他们之间的关系好比【雷锋】和【雷峰塔】 
```
- 类型字面量
```typescript
// 【可辨识联合类型】的学习中，会用到 "类型字面量"
// 跟 JavaScript 中的对象字面量的语法很相似:
type Foo = { // 在一定程度上类型字面量可以代替接口
  baz: [
    number,
    'xiaomuzhu'
  ];
  toString(): string;
  readonly [Symbol.iterator]: 'github';
  0x1: 'foo';
  "bar": 12n;
};
```

- 字面量类型
    - 主要分为 
        - 字符串字面量类型（string literal types）
        - 数字字面量类型（numeric literal types）
        - 大整数字面量类型（bigInt literal types）
        - 真值字面量类型（boolean literal types）
        - 枚举字面量类型（enum literal types）
    ```typescript
          const a: 2333 = 2333 // ok
          const ab : 0b10 = 2 // ok
          const ao : 0o114 = 0b1001100 // ok
          const ax : 0x514 = 0x514 // ok
          const b : 0x1919n = 6425n // ok
          const c : 'xiaomuzhu' = 'xiaomuzhu' // ok
          const d : false = false // ok
          
          // error 不能将类型“"pronhub"”分配给类型“"github"”
          // const g: 'github' = 'pronhub'
    ```
    ```typescript
          type Direction = 'North' | 'East' | 'South' | 'West';
          function move(distance: number, direction: Direction) {
              // ...
          }
    ```

---
### 5. ts 重点

##### 1）双重断言
```typescript
    interface Person {
    	name: string;
    	age: number;
    }
    
    // const person1 = 'xiaomuzhu' as Person; // Error
    const person2 = 'xiaomuzhu' as any as Person; // Ok
```

##### 2）类型守卫 <说白了就是缩小类型的范围>
```typescript
    // instanceof
        class Person {
            name = 'xiaomuzhu';
            age = 20;
        }
        
        class Animal {
            name = 'petty';
            color = 'pink';
        }
        
        function getSometing(arg: Person | Animal) {
            // 类型细化为 Person
            if (arg instanceof Person) {
                // Error，因为arg被细化为Person，而Person上不存在 color属性
                // console.log(arg.color);

                console.log(arg.age); // Ok
            }
            // 类型细化为 Person
            if (arg instanceof Animal) {
                console.log(arg.color); // Ok

                // Error，因为arg被细化为Animal，而Animal上不存在 age 属性
                // console.log(arg.age);
            }
        }
    // in
        function getSth(arg: Person | Animal) {
        	if ('age' in arg) {
        		// console.log(arg.color); // Error
        		console.log(arg.age); // Ok
        	}
        	if ('color' in arg) {
        		console.log(arg.color); // Ok
        		// console.log(arg.age); // Error
        	}
        }
```

##### 3）高级类型 <交叉类型 &>
- 将多个类型合并为一个类型
    
##### 4）高级类型 <联合类型 |>
- 一个值可以是几种类型之一
```typescript
// 所以number | string | boolean表示一个值可以是number、string、或boolean
```

##### 5）高级类型 <类型别名>
        interface 
            定义类型
            interface 方式可以实现接口的 extends 和 implements
            interface 可以实现接口、合并声明
        type 
            除了对象之外，还可以定义交叉、联合、原始类型等，

    类型别名 适用范围显然更加广泛

- 给一个类型起个新名字
```typescript
type some = boolean | string

const b: some = true // ok
const c: some = 'hello' // ok
// const d: some = 123 // error 不能将类型“123”分配给类型“some”
```

- 类型别名可以是泛型:
```typescript
type Container<T> = { value: T };
```

- 可以使用类型别名来在属性里引用自己:
```typescript
type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}
```
