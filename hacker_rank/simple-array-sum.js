// simple-array-sum
// https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true

// Without using Built-in Function
function simpleArrSum(arr) {
    let sum = 0;
    for(let num of arr) {
        sum += num;
    }
    return sum;
}
console.log(simpleArrSum([6, 7, 8, 9, 10])); // 40


// Using Built-in Function
function simpleArraySum(ar) {
    return ar.reduce((a, b) => a+b, 0);
}
console.log(simpleArraySum([1, 2, 3, 4, 5])); // 15