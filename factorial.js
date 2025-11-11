// using for loop
function fac(n) {
    let factorial = 1;
    for(let i=1; i<=n; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(fac(5)); // 120
console.log(fac(4)); // 24

// using recursion
function factorial(n) {
    if(n == 1) return 1;
    return n * factorial(n-1);
}
console.log(factorial(5)); // 120
console.log(factorial(4)); // 24