import { IAnyObject } from '../entries/iAnyObject'

export function mixinObject<T extends IAnyObject, U extends IAnyObject>(first: T, second: U): T & U {
    const result = <T & U>{};
    for (let id in first) {
        (<T>result)[id] = first[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<U>result)[id] = second[id];
        }
    }

    return result;
}
