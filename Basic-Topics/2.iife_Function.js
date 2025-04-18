/** @format */

var variable = 10;

(() => {
  console.log("1.variable is ->", variable);

  variable = 20;

  console.log("2.variable is ->", variable);
})(); // iife function

console.log("3.variable is ->", variable);

var variable = 30;

console.log("4.variable is ->", variable);

/*
 * Output: node 2.iife_Function.js 
    1.variable is -> 10
    2.variable is -> 20
    3.variable is -> 20
    4.variable is -> 30
 */
