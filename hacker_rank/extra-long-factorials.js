// Extra Long Factorials
// https://www.hackerrank.com/challenges/extra-long-factorials/problem?isFullScreen=true
function extraLongFactorials(n) {
    let fact = 1n;
    for(let i=1n; i<=BigInt(n); i++) {
        fact*=i;
    };
    console.log(fact.toString());
}
extraLongFactorials(25); // 15511210043330985984000000
extraLongFactorials(45); // 119622220865480194561963161495657715064383733760000000000