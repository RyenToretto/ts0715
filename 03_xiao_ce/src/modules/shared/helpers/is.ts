export function isString(test: any): test is string{
    return typeof test === 'string';
}

export function notUndefined(item: any): boolean {
    return item != undefined && item != 'undefined';
}

export function isFunction(value: any): value is Function {
    return typeof value === 'function';
}

export function isConstructor(symbol: any): boolean {
    return notUndefined(symbol) &&
        symbol instanceof Function &&
        symbol.constructor &&
        symbol.constructor instanceof Function &&
        notUndefined(new symbol) &&
        Object.getPrototypeOf(symbol) !== Object.prototype &&
        symbol.constructor !== Object &&
        symbol.prototype.hasOwnProperty('constructor');
}


