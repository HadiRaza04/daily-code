// compare-the-triplets
// https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true

function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    for(let i=0; i<a.length; i++){
        if(a[i] > b[i]) {
            alice += 1;
        }
        else if(a[i] < b[i]) {
            bob += 1;
        } 
    }
    return [alice, bob];
}
console.log(compareTriplets([1, 2, 3], [3, 2, 1]));      // [1, 1]
console.log(compareTriplets([5, 6, 7], [3, 6, 10]));     // [1, 1]
console.log(compareTriplets([17, 28, 30], [99, 16, 8])); // [2, 1]