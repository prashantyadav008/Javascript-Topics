/** @format */

function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();

    if (now - lastCall < delay) {
      return;
    }

    lastCall = now;
    return fn(...args);
  };
}

function showData(message) {
  console.log(message);
}

const callShowData = throttle(showData, 2000);

callShowData("h"); // This will be shown

setTimeout(() => callShowData("he"), 100); // Ignored
setTimeout(() => callShowData("hel"), 1500); // Ignored
setTimeout(() => callShowData("hell"), 2000); // This will be shown
setTimeout(() => callShowData("hello"), 3000); // Ignored
setTimeout(() => callShowData("hello"), 3500); // Ignored
setTimeout(() => callShowData("hello"), 4500); // This will be shown

/** 
 * Output: node Intermediate-Topics/6.Throttle.js 
    h
    hell      // This will be shown after 2 seconds
    hello     // This will be shown after 2 seconds
 */
