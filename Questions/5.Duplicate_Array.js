/** @format */

const array = [1, 21, 13, 88, 19];

var newArr = duplicateArray(array);

function duplicateArray(value) {
  return value.concat(value);
}
console.log("newArr is ->", newArr, newArr.length);

var newArray2 = [...new Set(array), ...new Set(array)];

console.log("newArray2 is ->", newArray2, newArray2.length);

/**
 * Output: node Questions/5.Duplicate_Array.js 
      newArr is -> [
        1, 21, 13, 88, 19,
        1, 21, 13, 88, 19
      ] 10
      newArray2 is -> [
        1, 21, 13, 88, 19,
        1, 21, 13, 88, 19
      ] 10
 */
