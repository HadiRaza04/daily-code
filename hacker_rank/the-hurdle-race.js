// the-hurdle-race
// https://www.hackerrank.com/challenges/the-hurdle-race/problem?isFullScreen=true

function hurdleRace(k, height) {
    let highest = 0;
    for(let i in height) {
        if(height[i] > highest) highest = height[i];
    }
    if(k > highest) return 0;
    return highest-k;
}
console.log(hurdleRace(7, [2, 5, 4, 5, 2]));  // 0
console.log(hurdleRace(4, [1, 6, 3, 5, 2]));  // 2