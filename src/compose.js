'use strict';

const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);

const compose = (...fnc) => (price) => fnc.reduceRight((prev, current) => current(prev), price);

// function compose(...fnc) {
//   return function (price) {
//     return fnc.reduceRight( function (prev, current) {
//       return current(prev);
//     }, price);
//   };
// }

const discount = compose(normalizePrice, divide100, multiply20);

console.log(discount(100));

const add1 = function(a) {return a + 1;},
      addAll3 = function(a, b, c) {return a + b + c;};

const composeWithArgs = (...fnc) => fnc.reduceRight((prev, cur) => (...args) => cur(prev(...args)));

console.log(composeWithArgs(add1, addAll3)(1, 2, 3));
