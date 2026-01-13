// Mini Max Sum
// https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
function miniMaxSum(arr) {
    let min=Infinity, max=-Infinity, sum=0;
    for(let i of arr) {
        sum += i;
        if(i > max) max = i;
        if(i < min) min = i;
    }
    console.log(sum-max, sum-min);
}
miniMaxSum([1, 3, 5, 7, 9]);