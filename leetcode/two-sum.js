// two-sum-ii-input-array-is-sorted
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/submissions/1810669735/

function twoSum(numbers, target) {
    const map = {}; 

  for (let i = 0; i <= numbers.length; i++) {
    let complement = target - numbers[i];

    if (map.hasOwnProperty(complement)) {
      return [map[complement]+1, i+1];
    }
    map[numbers[i]] = i;
  }
  return []
};
console.log(twoSum([2, 7, 11, 15], 9));  // [1, 2]
console.log(twoSum([2, 7, 11, 15], 22)); // [2, 4]