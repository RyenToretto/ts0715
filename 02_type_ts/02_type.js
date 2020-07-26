var booleanTest = function () {
    var flag = false;
    return flag;
};
var numTest = function () {
    var num = 0;
    console.log('numInit = ' + num);
    num = 1;
    // 将一个字符串 赋值 给一个 number 类型的变量
    // num = 'a string'; // 会 ts 报错，但是仍然可以编译运行
    return num;
};
var stringTest = function () {
    var str = 'Hello, ts';
    console.log('strInit = ' + str);
    str = 'Hello, worktile';
    return str;
};
var arrayTest = function () {
    var arrStr = ['Hello, ', 'ts'];
    console.log('arrStr = ' + arrStr);
    var arrNum = [3, 2, 1, 0];
    return arrNum;
};
var tupleTest = function () {
    var tupleArr = [['Hello, ', 'ts'], 666666];
    console.log('tupleArr = ' + tupleArr);
    tupleArr.push(444); // 数组前面的两个元素指定了类型，不影响后面的元素
    return tupleArr;
};
var enumTest = function () {
    var PayStatus;
    (function (PayStatus) {
        PayStatus[PayStatus["payWait"] = 2] = "payWait";
        PayStatus[PayStatus["payDone"] = 4] = "payDone";
        PayStatus[PayStatus["overPay"] = 6] = "overPay";
    })(PayStatus || (PayStatus = {}));
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
    var Color;
    (function (Color) {
        Color[Color["red"] = 0] = "red";
        Color[Color["green"] = 1] = "green";
        Color[Color["blue"] = 2] = "blue";
    })(Color || (Color = {}));
    console.log(Color.red); // 0
    console.log(Color.green); // 1
    console.log(Color.blue); // 2
    var RGB;
    (function (RGB) {
        RGB[RGB["red"] = 0] = "red";
        RGB[RGB["green"] = 5] = "green";
        RGB[RGB["blue"] = 6] = "blue";
    })(RGB || (RGB = {}));
    console.log(RGB.red); // 0
    console.log(RGB.green); // 5
    console.log(RGB.blue); // 6 上一个 枚举属性 的值 + 1
    return RGB;
};
var count = 0;
function lineRun(callback) {
    count++;
    console.log('\n**** ' + count + '. ' + callback.name + ' ****');
    var result = callback();
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
