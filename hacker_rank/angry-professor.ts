// Angry Professor
// https://www.hackerrank.com/challenges/angry-professor/problem?isFullScreen=true

function angryProfessor(k: number, a: number[]): string {
    let arr: number = 0;
    let no_arr: number = 0;
    for(let num of a) {
        if(num <= 0) {
            arr += 1;
        } else {
            no_arr += 1;
        }
    }
    return arr>=k ? "NO" : "YES";
}
console.log(angryProfessor(3, [-2, -1, 0, 1, 2])); // "NO"
console.log(angryProfessor(3, [-1, 0, 1, 2])); // "YES"