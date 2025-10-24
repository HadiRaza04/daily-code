// the-birthday-bar
// https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true

function birthday(s, d, m) {
    let count = 0;
    let sum = 0;
    
    for(let i=0; i<m; i++) {
        sum += s[i];
    }
    if(sum === d) count++;
    
    for(let j=m; j<s.length; j++) {
        sum += s[j] - s[j-m];
        if(sum === d) count++;
    }
    return count;
}
console.log(birthday([2, 2, 1, 3, 2], 4, 2)); // 2
console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2)); // 0