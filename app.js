function a(arr) {

    let arr2 = []

    for(let i=0; i<arr.length-1; i++) {
        for(let j=0; j<arr.length-1; j++) {
            if(arr[i]+ arr[j] == 10) {
                if(!arr2.includes([arr[i], arr[j]])) {
                    arr2.push([arr[i], arr[j]])
                }
            }
        }
    }
    return arr2

}

console.log(a([6, 5, 1, 4, 5, 9, 7]));