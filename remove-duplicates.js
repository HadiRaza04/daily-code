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

// Same logic for array
function rem(arr) {
    let d = []
    for(let i in arr) {
        let have = false;
        for(let j in arr) {
            if(arr[i] == d[j]){
                have = true
                break
            }
        }
        if(!have) d.push(arr[i])
    }
    return d
}
console.log(rem(["a", "b", "b", "c", "a"]));
