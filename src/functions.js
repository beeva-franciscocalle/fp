'use strict';

function mapForEach(arr, fn) {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(
      fn(arr[i])
    );
  }
  return newArr;
}

const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('arr1', arr1);

const arr2 = mapForEach(arr1, (item)=>{
  return item * 2;
});
console.log('arr2', arr2);
