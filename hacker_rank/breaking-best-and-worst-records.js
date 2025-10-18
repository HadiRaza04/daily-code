// breaking-best-and-worst-records
// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true

function breakingRecords(scores) {
    let min = scores[0]
    let minCount = 0
    let max = scores[0]
    let maxCount = 0

    for(let i in scores) {
        if(scores[i] > max) {
            max = scores[i]
            maxCount++;
        }
        if(scores[i] < min) {
            min = scores[i]
            minCount++;
        }
    }
    return [maxCount, minCount]
}
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));   // [2, 4]
