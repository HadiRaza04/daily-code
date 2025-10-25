// contains-duplicate
// https://leetcode.com/problems/contains-duplicate/

// Using Hashmaps - time complexity is O(n)
function containsDuplicate(nums) {
    let map = {};
    for(let i in nums) {
        if(map.hasOwnProperty(nums[i])) return true;
        map[nums[i]] = i;
    }
    return false;
}
console.log(containsDuplicate([1, 2, 3, 4]));  // false
console.log(containsDuplicate([1, 2, 3, 1]));  // true


// Using nested for loops - time complexity is O(n^2)
function containsDup(nums) {
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++) {
            if(nums[i] == nums[j]) return true;
        }
    }
    return false;
}
console.log(containsDup([1, 2, 3, 4]));  // false
console.log(containsDup([1, 2, 3, 1]));  // true