function countOccurrences(str) {
    let occObj = {}
    for(let char of str) {
        occObj[char] = (occObj[char] || 0) + 1;
    }
    return occObj;
}
console.log(countOccurrences("Hello World!"));  // { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1, '!': 1 }