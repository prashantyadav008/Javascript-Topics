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

raj.sayName();
raj.sayName.call(prashant);

function calling() {
  var firstName = "Prashant";
  console.log(this.firstName);

  lastName = "Yadav";
  console.log(this.lastName);
}
calling();

/**
 * Output: node 6.object_calling.js 
    raj sayName --->> Raj
    raj sayName --->> Prashant Yadav
    undefined
    Yadav
 */
