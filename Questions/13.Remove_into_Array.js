/** @format */

var arr = [
  {
    name: "a",
    gender: "female",
  },
  {
    name: "b",
    gender: "female",
  },
  {
    name: "c",
    gender: "female",
  },
  {
    name: "d",
    gender: "male",
  },
  {
    name: "e",
    gender: "female",
  },
  {
    name: "f",
    gender: "female",
  },
];

const newArr = arr.filter((data) => {
  return data.gender === "male";
});
// arr = newArr;

console.log("using filter ->", newArr);

arr.forEach((data, index) => {
  if (data.gender === "male") {
    arr.splice(index, index + 1);
  }
});
console.log("using forEach ->", arr);
