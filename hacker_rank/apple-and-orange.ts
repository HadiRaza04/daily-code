// Apple and Orange
// https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
    let countApp:number = apples.map(app => app+a).filter(z => {return z>=s && z<=t}).length;
    let countOra: number = oranges.map(org => org+b).filter(z => { return z>=s && z<=t}).length;
    
    console.log(countApp); // 1
    console.log(countOra); // 2
}
countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])