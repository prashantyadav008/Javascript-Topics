/** @format */

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const showData = (message) => {
  console.log(message);
};

const callShowData = debounce(showData, 1000);

callShowData("h");
callShowData("he");
callShowData("hel");
callShowData("hell");
callShowData("hello");
