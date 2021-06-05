import { User } from '../entries'
import { getUserName } from '../methods'

export const userTest = () => {
    const kjf: User = {
        name: 'kjf',
        isMale: true,
        age: 25,
        say(words: string) { return words; },
        eat(food: string) { console.log(food) },
        emailMap: {}
    };
    console.log(getUserName(kjf));
    return kjf;
}
