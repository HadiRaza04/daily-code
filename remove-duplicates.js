function removeDuplicates(str) {
    let result = ""

    for(let i=0; i<str.length; i++) {
        let isFound = false;
        for(let j=0; j<str.length; j++) {
            if(result[j] === str[i]) {
                isFound = true
                break
            }
        }
        if(!isFound) {
            result += str[i]
        }
    }
    return result
}
console.log(removeDuplicates("aga"));
