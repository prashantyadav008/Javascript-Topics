/** @format */

// Currying transforms a function with multiple arguments into a sequence of functions, each taking a single argument.
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn.apply(this, args);
    return function (...next) {
      return curried.apply(this, args.concat(next));
    };
  };
}

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
console.log(curriedAdd(1, 2, 3));

/**
 * Output: node 4.Currying_function.js 
    6
 */
