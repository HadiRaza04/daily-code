// diagonal-difference
// https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
function diagonalDifference(arr) {
    let leftToRightSum = 0;
    let rightToLeftSum = 0;

    for(let i = 0; i < arr.length; i++) {
        leftToRightSum += arr[i][i];
        rightToLeftSum += arr[i][arr.length - 1 - i];
    }
    return Math.abs(leftToRightSum - rightToLeftSum);
}
console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]]));     // 2
console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])); // 15