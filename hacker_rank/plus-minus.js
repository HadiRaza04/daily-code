// Plus Minus
// https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true

function plusMinus(arr) {
    let positive=0, negative=0, zeros=0;
    for(let i of arr) {
        if(i > 0) {
            positive+=1;
        } else if (i < 0) {
            negative+=1;
        } else {
            zeros+=1;
        }
    }
    console.log((positive/arr.length).toFixed(6));
    console.log((negative/arr.length).toFixed(6));
    console.log((zeros/arr.length).toFixed(6));
}
plusMinus([-2, -1, 0, 0, 1, 2]); // 0.33 0.33 0.33
plusMinus([1, 1, 0, -1, -1]); // 0.4 0.4 0.2


// // TypeScript version:
// function plusMinus(arr: number[]): void {
//     // Write your code here
//     let pos: number=0;
//     let neg: number=0;
//     let zeros: number=0;
//     let len: number = arr.length;
//     for(let i of arr) {
//         if(i > 0) {
//             pos += 1;
//         } else if(i < 0) {
//             neg += 1;
//         } else {
//             zeros += 1;
//         }
//     }
//     console.log((pos/len).toFixed(6));
//     console.log((neg/len).toFixed(6));
//     console.log((zeros/len).toFixed(6));
// }