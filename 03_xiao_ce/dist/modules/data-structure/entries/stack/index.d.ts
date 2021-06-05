import { NumberOrString } from '../../../shared/entries';
export declare class NumberStack {
    private arr;
    push(item: number): void;
    pop(): number | undefined;
}
export declare class CustomStack<T> {
    private arr;
    push(item: T): void;
    pop(): T | undefined;
}
export declare class NumberOrStringStack<T extends NumberOrString> {
    private arr;
    push(item: T): void;
    pop(): T | undefined;
}
