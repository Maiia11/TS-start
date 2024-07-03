import './style.css'
function add(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add(1, 2));

const num = 10;
const str = 'Some string';
const bool = true;
const empty = null;
const notParam = undefined;

function foo (num: number, str: string, bool: boolean, empty: null, notParam: undefined) {
 console.log(num, str, bool, empty);
 
}

foo(num, str,bool, empty, notParam )
