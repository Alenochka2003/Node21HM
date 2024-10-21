import { Animal } from './Animal';

class Cat extends Animal {
  makeSound(): void {
    console.log('Meow');
  }
}

export { Cat };