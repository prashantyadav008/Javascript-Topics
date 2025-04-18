/** @format */

async function getData() {
  return 1;
}

console.log("A");
console.log("B");

setTimeout(() => {
  console.log("C"); // goes into the callback queue
}, 0);

getData().then(() => {
  console.log("Got the Data"); // goes into the micro task queue and its has high priority

  setTimeout(() => {
    console.log("G");
  }, 0);
});

console.log("D");
console.log("E");
console.log("F");

/**
 * Output: node 2.Async_Functiopn.js 
    A
    B
    D
    E
    F
    Got the Data
    C
    G
 */
