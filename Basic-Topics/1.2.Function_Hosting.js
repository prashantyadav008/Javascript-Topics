/** @format */

myFun();

var myFun = function () {
  console.log("First");
};

myFun();

function myFun() {
  console.log("Second");
}

myFun();

/**
 * Output: node 1.2.Function_Hosting.js 
    Second
    First
    First
 */
