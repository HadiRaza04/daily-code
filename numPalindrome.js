function numPalindrome(num) {

    // Removing decimal
    while(num % 1 !== 0) {
        num *= 10
    }

    // Copy of original num
    let original = num;
    let rev = 0;

    while(num>0) {
        // remove last num and add to the end
        let last = num % 10;
        rev = rev*10 + last;
        num = Math.floor(num/10)
    }
    return rev === original
}
console.log(numPalindrome(1.011101));
