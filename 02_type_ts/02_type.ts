let booleanTest = () => {
    const flag: boolean = false;
    return flag;
}

let numTest = () => {
    let num: number = 0;
    console.log('numInit = ' + num);
    num = 1;

    // 将一个字符串 赋值 给一个 number 类型的变量
    // num = 'a string'; // 会 ts 报错，但是仍然可以编译运行
    return num;
}

let stringTest = () => {
    let str: string = 'Hello, ts';
    console.log('strInit = ' + str);
    str = 'Hello, worktile';
    return str;
}

let arrayTest = () => {
    let arrStr: string[] = ['Hello, ', 'ts'];
    console.log('arrStr = ' + arrStr);
    let arrNum: Array<number> = [3, 2, 1, 0];
    return arrNum;
}

let tupleTest = () => {
    let tupleArr: [string[], number] = [['Hello, ', 'ts'], 666666];
    console.log('tupleArr = ' + tupleArr);
    tupleArr.push(444); // 数组前面的两个元素指定了类型，不影响后面的元素
    return tupleArr;
}

let enumTest = () => {
    enum PayStatus {payWait = 2, payDone = 4, overPay = 6}
    console.log(PayStatus.payWait); // 2
    console.log(PayStatus.payDone); // 4
    console.log(PayStatus.overPay); // 6

    console.log(Object.prototype.toString.call(PayStatus)); // [object Object]
    console.log(PayStatus);
    console.log(PayStatus[2]); // 'payWait'
    /**enum PayStatus {payWait = 2, payDone = 4, overPay = 6}
     上面的代码转成 ES5 其实就是
        var PayStatus;
        (function (PayStatus) {
            PayStatus[PayStatus["payWait"] = 2] = "payWait";
            PayStatus[PayStatus["payDone"] = 4] = "payDone";
            PayStatus[PayStatus["overPay"] = 6] = "overPay";
        })(PayStatus || (PayStatus = {}));
     最终创建了一个对象：
        var PayStatus = {
            '2': 'payWait',
            '4': 'payDone',
            '6': 'overPay',
            payWait: 2,
            payDone: 4,
            overPay: 6
         }
     */

    enum Color {red, green, blue}
    console.log(Color.red); // 0
    console.log(Color.green); // 1
    console.log(Color.blue); // 2

    enum RGB {red, green = 5, blue}
    console.log(RGB.red); // 0
    console.log(RGB.green); // 5
    console.log(RGB.blue); // 6 上一个 枚举属性 的值 + 1
    return RGB;
}

let count = 0;
function lineRun(callback: any) {
    count++;
    console.log('\n**** ' + count + '. ' + callback.name + ' ****');
    const result = callback();
    console.log('result = ' + result);
    console.log('typeof result = ' + Object.prototype.toString.call(result));
    console.log('********');
    return 0;
}

lineRun(booleanTest);
lineRun(numTest);
lineRun(stringTest);
lineRun(arrayTest);
lineRun(tupleTest);
lineRun(enumTest);
