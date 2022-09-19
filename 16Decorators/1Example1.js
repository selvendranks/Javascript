// Example 1: Single function decorator
// Sum of n given numbers


let sum = (...args) => {
  return [...args].reduce((acc, num) => acc + num);
};

const deco = (fn) => {
  return (...args) => {
     console.log("I love javascript");
     return `sum is ${fn(...args)}`;
  };
};

sum = deco(sum);

console.log(sum(2, 3));
