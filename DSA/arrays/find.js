// Without built-in function
function findElement(arr, item) {
  for(let index in arr) {
    if(arr[index] == item) return index;
  }
  return -1;
}
console.log(findElement([1, 2, 3, 4, 5], 3)); // 2.
console.log(findElement([1, 2, 3, 4, 5], 6)); // -1.


// Using built-in function
function findEle(arr, item) {
  return arr.indexOf(arr.find((e) => e == item));
}
console.log(findEle([1, 2, 3, 4, 5], 3)); // 2
console.log(findEle([1, 2, 3, 4, 5], 6)); // -1