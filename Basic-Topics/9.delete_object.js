/** @format */

const obj = {
  age: 26,
};

console.log("obj.age ->> ", obj.age);
delete obj.age;
console.log("obj.age ->> ", obj.age);

/**
 * creates an object with no prototype
 * const obj1 = Object.create(null);
 */

// {} creates an object with Object.prototype
const obj1 = Object.create({
  age: 30,
});
console.log("obj1.age ->> ", obj1.age);

delete obj1.age;
console.log("obj1.age ->> ", obj1.age);

/**
 * Output: node 9.delete_object.js 
    obj.age ->>  26
    obj.age ->>  undefined
    obj1.age ->>  30
    obj1.age ->>  30
 */
