// a-very-big-sum
// https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true
function aVeryBigSum(ar) {
    let sum = 0n;
    for (let num of ar) {
        sum += BigInt(num);
    }
    return sum;
}
console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));
