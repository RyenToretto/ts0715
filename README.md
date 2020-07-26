## 和王多肉一起学习 typescript

### 1. 定义变量必须指明其 typescript 类型
```
    为了使编写的代码更规范，更利于维护

    01) 布尔类型（boolean）
    02) 数字类型（number）
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
        tupleArr.push(444); // 数组前面的两个元素指定了类型，不影响后面的元素
        Object.prototype.toString.call(tupleArr); // [object Array]

    07) 枚举类型（enum 定义标识符，标识状态或则固定值）
        背景：
            尚可接受：---- 0 代表 关，1 代表 开
            不直观，可读性差：---- 0代表周一, 1代表周二, 2代表周三, 3代表周四, 4代表周五, 5代表周六, 6代表周日
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

    08) 任意类型（any）
    09) void 类型
    10) never 类型
```
