'use strict';

const _ = require('./underscore-1.8.3');

const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('arr1', arr1);

const arr2 = _.map(arr1, function(item) {
  return item * 3;
});
console.log('arr2', arr2);
const arr3 = _.filter(arr1, function(item) {
  return item % 2 === 0;
});
console.log('arr3', arr3);
