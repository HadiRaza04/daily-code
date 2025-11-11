// recursion
// https://www.hackerrank.com/challenges/30-recursion/problem?isFullScreen=true

function factorial(n) {
    if(n == 1) return 1;
    return n * factorial(n-1);
}
console.log(factorial(5)); // 120
console.log(factorial(4)); // 24