import { Animal } from './Animal';

class Dog extends Animal {
  makeSound(): void {
    console.log('Bark');
  }
}

export { Dog };
