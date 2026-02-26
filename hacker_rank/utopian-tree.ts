// Utopian Tree
// https://www.hackerrank.com/challenges/utopian-tree/problem?isFullScreen=true

function utopianTree(n: number): number {
    let height: number = 1;
    for(let i: number = 1; i<=n; i++) {
        if(i % 2 !== 0) {
            height *= 2;
        } else {
            height += 1;
        }
    }
    return height;
}
console.log(utopianTree(0)); // 1
console.log(utopianTree(1)); // 2
console.log(utopianTree(4)); // 7