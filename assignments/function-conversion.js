// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

let myFunction = () => {
  console.log('Function was invoked!');
};
myFunction();

let anotherFunction = param => param;
const result = anotherFunction('Example');
console.log(result);

let add = (param1, param2) => param1 + param2;
const added = add(1, 2);
console.log(added);

let subtract = (param1, param2) => param1 - param2;
const difference = subtract(1, 2);
console.log(difference);

// Stretch

exampleArray = [1, 2, 3, 4];
const triple = exampleArray.map(num => num * 3);

console.log(triple);
