// cats-and-a-mouse
// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?isFullScreen=true

function catAndMouse(x, y, z) {
    let diff1 = Math.abs(z-x);
    let diff2 = Math.abs(z-y); 
    if(diff1 > diff2) {
        return "Cat B";
    } else if(diff1 < diff2) {
        return "Cat A";
    } else {
        return "Mouse C";
    }
}
console.log(catAndMouse(2, 5, 4)); // "Cat B"
console.log(catAndMouse(2, 5, 3)); // "Cat B"