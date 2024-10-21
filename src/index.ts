const greeting: string = 'Hello, TypeScript with Node.js!';
console.log(greeting);

import { Animal } from './Animal';
import { Dog } from './Dog';
import { Cat } from './Cat';

const animals: Animal[] = [new Dog(), new Cat()];

animals.forEach(animal => animal.makeSound());
