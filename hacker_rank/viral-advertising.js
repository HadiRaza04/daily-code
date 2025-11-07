// strange-advertising
// https://www.hackerrank.com/challenges/strange-advertising/problem?isFullScreen=true

function viralAdvertising(n) {
    let share = 5;
    let cumulative = 0;

    for (let i = 1; i <= n; i++) {
        let like = Math.floor(share / 2);
        cumulative += like;
        share = like * 3;
    }
    return cumulative;
}
console.log(viralAdvertising(3)); // 9
console.log(viralAdvertising(4)); // 15