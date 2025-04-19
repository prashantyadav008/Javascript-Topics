/** @format */

const alphabate = "my name is prashant yadav";

var result = alphabate
  .split(" ")
  .map((data) => {
    let internal = data.split("");
    internal[0] = internal[0].toUpperCase();
    return internal.join("");
  })
  .join(" ");

var result1 = alphabate
  .split(" ")
  .map((data) => {
    return data.charAt(0).toUpperCase() + data.slice(1);
  })
  .join(" ");

console.log("result -> ", result);
console.log("result1 -> ", result1);

/**
 * Output: node Questions/9.String_Upercase.js 
      result ->  My Name Is Prashant Yadav
      result1 ->  My Name Is Prashant Yadav
 */
