function scope(arr) {
    let greater = 0;
    for(let i=0; i<arr.length; i++) {
        for(let j = i+1; j<arr.length; j++) {
            Math.abs(arr[i] - arr[j]) > greater && (greater = Math.abs(arr[i] - arr[j]));
        }
    }
    return greater;
}
console.log(scope([1, 2, 5, 9]));