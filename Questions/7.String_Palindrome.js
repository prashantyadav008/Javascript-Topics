/** @format */

const string = "malayalam";

var revString = string.split("").reverse().join("");

if (string === revString) {
  console.log("String is Palindrome");
} else {
  console.log("String is Not Palindrome");
}
