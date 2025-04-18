/** @format */

const prashant = {
  name: "Prashant Yadav",
  sayName: function () {
    console.log("prashant sayName --->>", this.name);
  },
};

const raj = {
  name: "Raj",
  sayName: function () {
    console.log("raj sayName --->>", this.name);
  },
};

prashant.sayName();

// but the call and apply are same so whats the difference, the difference is in apply it takes an array of arguments

// apply with array of arguments
prashant.sayName.apply(raj, ["Raju", "Yadav"]);

/**
 * Output: node Basic-Topics/8.object_apply.js 
    prashant sayName --->> Prashant Yadav
    prashant sayName --->> Raj
 */
