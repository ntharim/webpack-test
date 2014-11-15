var hg = require('mercury');
var mod = require('./es6-module.js').default;
import mod2 from './es6-module.js';

console.log(mod(17 , 9));
console.log(mod2(17 , 5));
console.log([1, 2, 3].map(n => n*4));

let x = 1;
console.log(x);

console.log(`In ES5 this is
 not legal.`);

var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

var [a, , b] = [1,2,3];

console.log(a, b);

function f(x, y=12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}
console.log(f(3));

function f1(x, ...y) {
  // y is an Array
  return x * y.length;
}
console.log(f1(3, "hello", true));

function f3(x, y, z) {
  return x + y + z;
}
console.log(f3(...[1,2,3]));


var customers = [
  { name: 'H', age: 19, city: 'Seattle' },
  { name: 'A', age: 21, city: 'Sydney' },
  { name: 'B', age: 15, city: 'Seattle' },
  { name: 'R', age: 1, city: 'Paris' }
];
var results = [
  for(c of customers)
    if (c.city == "Seattle")
      { name: c.name, age: c.age }
];
console.log(results);

var propName = 'code';
var params = {
    b() { return 'b'; },
    [propName]: true,
    ['data' + propName.toUpperCase()]: true
};
console.log(params);