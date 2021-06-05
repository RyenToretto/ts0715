import { NumberStack, CustomStack, NumberOrStringStack } from '../entries'
import {
    returnItem,
    returnItemNumber,
    returnItemString,
    swapTuple,
    printArrayLength, getValue
} from '../methods'

export const dataStructureTest = () => {
    console.log(returnItem(1)) // 可传入任何类型的值
    console.log(returnItemNumber(1)) // 只能传入数字，否则报错
    console.log(returnItemString('a')) // 只能传入字符串，否则报错

    swapTuple([7, 'seven']); // ['seven', 7]

    printArrayLength([1, 2, 3]); // ['seven', 7]
    printArrayLength(['a', 'bb', 'ccc', 'abcd']); // ['seven', 7]
    printArrayLength([7, 'seven']); // ['seven', 7]

    const numberStack = new NumberStack(); // new 一个数字栈
    numberStack.push(1); // 存入一个数字，不可以是其他类型
    console.log(numberStack.pop()) // 拿出一个数字

    const customStack = new CustomStack(); // new 一个数字栈
    customStack.push('a'); // 可以存储任意类型
    customStack.push(2); // 可以存储任意类型
    customStack.push({ name: 'kjf' }); // 可以存储任意类型
    console.log(customStack.pop()) // 拿出一个元素

    const numberOrStringStack = new NumberOrStringStack(); // new 一个数字栈
    numberOrStringStack.push('aa'); // 可以存储字符串
    numberOrStringStack.push(22); // 可以存储数字
    numberOrStringStack.push(23); // 可以存储数字
    // numberOrStringStack.push({ name: 'kjf' }); // 不可以存储对象，或则其他类型，否则报错
    console.log(numberOrStringStack.pop()) // 拿出一个元素

    const obj = {
        name: 'wy',
        age: 18
    }
    // 这个时候 getValue 第二个参数 key 的类型被约束为一个联合类型 name | id
    console.log(getValue(obj, 'name'));
}
