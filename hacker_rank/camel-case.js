// Camel Case
// https://www.hackerrank.com/challenges/camelcase/problem?isFullScreen=true
function camelCase(s) {
    let count = 1;
    for(let char of s) {
        if(char >= 'A' && char <= 'Z') count+=1;
    }
    return count;
}
console.log(camelCase("happyBirthDay"));