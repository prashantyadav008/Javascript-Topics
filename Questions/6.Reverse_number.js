/** @format */

var number = 1234;

var reverse = number.toString().split("").reverse().join("");

reverse = Number(reverse);

console.log("reverse --> ", reverse);
console.log("typeof reverse --> ", typeof reverse);

var n = number;
var rev = 0;
while (n != 0) {
  rem = n % 10;
  rev = rev * 10 + rem;
  n = Math.floor(n / 10);
}

console.log("rev -->>", rev);

/**
 * Output: node Questions/6.Reverse_number.js 
    reverse -->  4321
    typeof reverse -->  number
    rev -->> 4321
 */
