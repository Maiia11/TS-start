import './style.css'
function add(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add(1, 2));

function logMessage(message: string): void {
  console.log(message);
}

logMessage('Hello, world!');
type CallbackType = (num1: number, num2: number) => number;

// Функція, яка приймає два числа та функцію зворотного виклику, застосовує цю функцію до чисел та виводить результат
function calc(param1: number, param2: number, callback: CallbackType): void {
  console.log('Result:', callback(param1, param2));
}

// Приклади використання calc з різними функціями зворотного виклику
calc(1, 1, (num1, num2) => num1 + num2);
calc(10, 5, (num1, num2) => num1 - num2);

interface Walkable {
  walk(): void;
}

interface Eatable {
  eat(): void;
}

class Animal implements Walkable, Eatable {
  walk() {
    console.log('The animal walks...');
  }

  eat() {
    console.log('The animal eats...');
  }
}

const animal = new Animal();
console.log(animal);


function firstElement<T>(arr: T[]): T {
  return arr[0];
}

let numbers = [1, 2, 3, 4, 5];
let firstNum = firstElement(numbers);
console.log(firstNum);


let strings = ['a', 'b', 'c', 'd'];
let firstStr = firstElement(strings);
console.log(firstStr);

