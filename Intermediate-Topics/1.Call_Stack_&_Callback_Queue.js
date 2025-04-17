/** @format */

console.log("A");
console.log("B");

setTimeout(() => {
  console.log("C");
}, 1000);

console.log("D");
console.log("E");
console.log("F");

/**
 * First Call all GEC(Global Execution Context) then Call the Callback Queue
 * Output: node 1.Call_Stack_&_Callback_Queue.js 
    A
    B
    D
    E
    F
    C
 */
