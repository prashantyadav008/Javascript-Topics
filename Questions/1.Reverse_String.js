/** @format */

const sentence = "What is your name";

const reverse = sentence
  .split(" ")
  .map((word) => word.split("").reverse().join(""))
  .join(" ");

console.log(reverse);

/**
 * Output: node 1.Reverse_String.js 
    tahW si ruoy eman
 */
