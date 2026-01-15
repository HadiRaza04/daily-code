// Tutorial Intro
// https://www.hackerrank.com/challenges/tutorial-intro/problem?isFullScreen=true
function introTutorial(V, arr) {
    for(let i in arr) {
        if(arr[i] == V) return i;
    }
}
console.log(introTutorial(3, [3, 2, 0, 3]));