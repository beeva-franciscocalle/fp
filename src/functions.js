'use strict';

const mapForEach = (arr, fn) => {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push( fn(arr[i]) );
  }
  return newArr;
};
const checkPastLimit = (limiter) => {
  return function (l, i) {
    return i > l;
  }.bind(this, limiter);
};

console.log('>> original array');
const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('arr1', arr1);
console.log("------------o------------");

console.log('>> double the values');
const arr2 = mapForEach(arr1, (item) => {
  return item * 2;
});
console.log('>> arr2', arr2);
console.log("------------o------------");

console.log('>> mapForEach greater than 5');
const arr3 = mapForEach(arr1, (item) => {
  console.log(`doing something with the item: ${item}`);
  return item > 5;
});
console.log('>> arr3', arr3);
console.log("------------o------------");

console.log('>> checkPastLimit', 5);
const arr4 = mapForEach(arr1, checkPastLimit(5));
console.log('arr4', arr4);
console.log("------------o------------");
