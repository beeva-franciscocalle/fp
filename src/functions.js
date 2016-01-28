'use strict';

const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('arr1', arr1);

const arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}
console.log('arr2', arr2);
