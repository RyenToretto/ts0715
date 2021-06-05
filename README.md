## 和王多肉一起学习 typescript

### 1. 定义变量必须指明其 typescript 类型
```
    为了使编写的代码更规范，更利于维护

    01) 布尔类型（boolean）

    02) 数字类型（number）
        const decLiteral: number = 6
        const hexLiteral: number = 0xf00d
        const binaryLiteral: number = 0b1010
        const octalLiteral: number = 0o744
            注意：我们在使用 BigInt 的时候，必须添加 ESNext 的编译辅助库
                "lib": ["es6", "dom", "ESNext"]

    03) 字符串类型（string）

    04) null 和 undefined

    05) 数组类型（array）
        第一种方式：
            let arrOneType: number[] = [0, 2, 4, 6];
        第二种方式（通过泛型定义数组）：
            let arrTest: Array<string> = ['I', 'am', 'god'];

    06) 元组类型（tuple）
        属于数组的一种，可以指定数组里面每个元素的类型
            let tupleArr: [string[], number] = [['Hello, ', 'ts'], 666666];
            console.log('tupleArr = ' + tupleArr);
            Object.prototype.toString.call(tupleArr); // [object Array]

        元组越界问题：
            // 允许向元组中使用数组的push方法插入新元素
            tupleArr.push(444); // 数组前面的两个元素指定了类型，不影响后面的元素
            
            // 但是当我们访问新加入的元素时，会报错
            // Tuple type '[string, number]' of length '2' has no element at index '2'
            console.log(tuple[2]);

    07) 枚举类型（enum 定义标识符，标识状态或则固定值）
            枚举类型, 其实本质上是 JavaScript 对象.（通过编译后的 JavaScript 了解到）
            枚举类型被编译为 JavaScript 后是什么样子:
                var Direction;
                (function (Direction) {
                    Direction[Direction["Up"] = 10] = "Up";
                    Direction[Direction["Down"] = 11] = "Down";
                    Direction[Direction["Left"] = 12] = "Left";
                    Direction[Direction["Right"] = 13] = "Right";
                })(Direction || (Direction = {}));

        背景：
            0代表关，1代表开
                 -------- 尚可接受
            0代表周一, 1代表周二, 2代表周三, 3代表周四, 4代表周五, 5代表周六, 6代表周日
                 -------- 不直观，可读性差 

        解决：使用相应的单词，来代表某一状态 ---- 使程序易阅读易理解
        枚举：枚举状态的值，定义一个具有代表意义的单词
        定义一个枚举类型:
            enum 枚举类型名 {
                标识符[=整型常数],
                标识符[=整型常数],
                ...
                标识符[=整型常数]
            };
        实例：
            /**** 1. 定义一个枚举类型 ****/
            // 设计数据： pay_status    2未支付    4已支付    6交易结束
            enum PayStatus {
                payWait = 2,
                payDone = 4,
                overPay = 6
            }
            /**** 2. 使用枚举变量 PayStatus.payWait ****/
            let phoneWaitPay: PayStatus = PayStatus.payWait; // 2

            /**** 官网1. 定义一个枚举类型 ****/
            // 设计数据： Color    0 red    1 blue    2 orange
            enum Color {
                red,
                blue,
                orange
            } // 其实就是告诉我们，可以不指定值，默认从 0 开始
            /**** 官网2. 使用枚举变量 Color.blue ****/
            let bColor: Color = Color.blue; // 1

            /**** 官网1. 定义一个枚举类型 ****/
            // 设计数据： Color    0 red    1 blue    2 orange
            enum Color {
                red,
                blue = 5,
                orange
            } // 其实就是告诉我们，可以不指定值，默认从 0 开始
            // 可以从某处开始指定值，后面的值累加
            /**** 官网2. 使用枚举变量 Color.blue ****/
            let rColor: Color = Color.red; // 0
            let bColor: Color = Color.blue; // 5
            let oColor: Color = Color.orange; // 6

        - 数字枚举：
        https://juejin.cn/book/6844733813021491207/section/6844733813117943822
            enum Direction {
                Up,
                Down,
                Left,
                Right
            }
            console.log(Direction.Up === 0); // true
            console.log(Direction.Down === 1); // true
            console.log(Direction.Left === 2); // true
            console.log(Direction.Right === 3); // true

        - 字符串枚举：
            enum Direction {
                Up = 'Up',
                Down = 'Down',
                Left = 'Left',
                Right = 'Right'
            }
            console.log(Direction['Right'], Direction.Up); // Right Up

        - 异构枚举：
            enum BooleanLikeHeterogeneousEnum {
                No = 0,
                Yes = "YES",
            }

        - 常量枚举：
            const enum Direction {
                Up = 'Up',
                Down = 'Down',
                Left = 'Left',
                Right = 'Right'
            }
            const a = Direction.Up;

        - 反向映射<通过枚举值获取枚举名字>：
            enum Direction {
                Up,
                Down,
                Left,
                Right
            }
            console.log(Direction[0]); // Up

        - 枚举合并<分开声明枚举,他们会自动合并>：
            enum Direction {
                Up = 'Up',
                Down = 'Down',
                Left = 'Left',
                Right = 'Right'
            }
            enum Direction {
                Center = 1
            }


    08) 任意类型（any）

    09) void 类型

    10) never 类型

    10) unknown 类型
        function getValue(value: unknown): string {
          if (value instanceof Date) {
            // 这里由于把value的类型缩小为Date实例的范围内,所以`value.toISOString()`
            return value.toISOString();
          }
        
          return String(value);
        }
```
