/** @format */

var variable = 10;

(() => {
  foo = 100;
  console.log("1.variable is ->", variable); // 10
  var foo = 100;
  variable = 20;
  console.log("2.variable is ->", variable); // 20
})();

console.log("3.Foo is ->", foo);
console.log("4.variable is ->", variable); // 20
var variable = 30;
console.log("5.variable is ->", variable); // 30

/**
 * Getting Error because foo is not declared inside the function
 * Output: node 3.iff_Global_Function.js 
    1.variable is -> 10
    2.variable is -> 20
    /Javascript-Topics/3.iff_Global_Function.js:13
    console.log("3.Foo is ->", foo); // not defined, because foo is not declared inside the function
                              ^

    ReferenceError: foo is not defined
 */
