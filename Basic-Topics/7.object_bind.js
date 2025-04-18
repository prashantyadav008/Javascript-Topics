/** @format */

const prashant = {
  name: "Prashant Yadav",
  sayName: function () {
    console.log(this.name);
  },
};

setTimeout(prashant.sayName, 3 * 1000);

const newFun = prashant.sayName.bind(prashant); // bind its whole function

setTimeout(newFun, 3 * 1000);

setTimeout(() => prashant.sayName(), 3 * 1000);

/**
 * Getting "Prashant Yadav" after 3 seconds
 * Output: node 7.object_bind.js
    undefined   
    Prashant Yadav
    Prashant Yadav
 */
