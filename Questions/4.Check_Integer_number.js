/** @format */

const value = 50.15;

const char = "55";

console.log(Number.isInteger(value));
console.log(Number.isInteger(char));

console.log(typeof value == "number");
console.log(typeof char == "number");

if (value % 1 == 0) {
  console.log("Integer");
} else {
  console.log("Not Integer");
}

/**
 * Output: node Questions/4.Check_Integer_number.js 
    false
    false
    true
    false
    Not Integer
 */
