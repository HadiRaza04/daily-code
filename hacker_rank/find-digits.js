// Find Digits
// https://www.hackerrank.com/challenges/find-digits/problem?isFullScreen=true
function findDigits(n) {
    let count = 0;
    let perm = n;
    let len = n.toString().length;
    for(let i=1; i<=len; i++) {
        let temp = n%10;
        if(perm%temp == 0) {
            count+=1;
        }
        n = Math.floor(n/10);
    }
    return count;
}
console.log(findDigits(121)); // 2
console.log(findDigits(122)); // 3