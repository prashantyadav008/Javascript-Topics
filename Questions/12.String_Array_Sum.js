/** @format */

const array_and_string = [
  "apple",
  11,
  "banana",
  22,
  "cherry",
  33,
  "kiwi",
  44,
  "mango",
  55,
];

function sumOfArray(value) {
  var sum = 0;
  return value.forEach((element) => {
    if (typeof element === "number") {
      sum += element;
    }
  });
}

console.log("array_and_string -->", sumOfArray(array_and_string));
