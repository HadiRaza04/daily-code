function findMax(arr) {
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(max<arr[i]){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([ 0, 4, 2, 9, 0, 1]));  // 9
console.log(findMax([ 0, 4, 2, 9, 0, 10]));  // 10