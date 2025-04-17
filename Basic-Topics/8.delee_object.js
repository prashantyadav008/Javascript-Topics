/** @format */

const obj = {
  age: 26,
};

console.log("obj.age ->> ", obj.age);
delete obj.age;
console.log("obj.age ->> ", obj.age);

// osing Object it store value in "Prototype"
const obj1 = Object.create({
  age: 30,
});
console.log("obj1.age ->> ", obj1.age);

delete obj1.age;
console.log("obj1.age ->> ", obj1.age);

/**
 * Output: node 8.delee_object.js 
    obj.age ->>  26
    obj.age ->>  undefined
    obj1.age ->>  30
    obj1.age ->>  30
 */
