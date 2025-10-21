// bon-appetit
// https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true

function bonAppetit(bill, k, b) {
    let total = bill.reduce((a, b) => a+b, 0);
    total  = total - bill[k];
    total = total/2;

    if(total == b) {
        console.log("Bon Appetit");
    }
    else {
        console.log(b-total);
    }
}
bonAppetit([3, 10, 2, 9], 1, 12); // 5
bonAppetit([3, 10, 2, 9], 1, 7);  // Bon Appetit