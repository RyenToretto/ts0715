import { Dog } from '../entries'

export const animalTest = () => {
    const wangCai = new Dog();
    wangCai.move();
    wangCai.makeSound();
    wangCai.run();
}
