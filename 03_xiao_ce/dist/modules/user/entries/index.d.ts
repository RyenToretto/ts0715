interface Eat {
    (food: string): void;
}
interface EmailMap {
    [email: string]: string;
}
export interface User {
    name: string;
    readonly isMale: boolean;
    age?: number;
    say: (words: string) => string;
    eat: Eat;
    emailMap: EmailMap;
}
export {};
