// conditional-statements
// https://www.hackerrank.com/challenges/30-conditional-statements/problem?isFullScreen=true

function main(n) {
    if(n % 2 != 0) {
        console.log("Weird");
    } else {
        if(n >= 2 && n <= 5) {
            console.log("Not Weird");
        } else if(n >=6 && n <= 20) {
            console.log("Weird");
        } else if(n > 20) {
            console.log("Not Weird");
        }
    }
}
main(3);
main(24);