// Without using built-in function
function deletion(arr, position) {
    for(let i=position; i<=arr.length-2; i++) {
        arr[i] = arr[i+1]
    }
    arr.length -= 1;
    return arr;
}
console.log(deletion([1, 2, 3, 8, 4, 5, 6, 7], 3));


// Using built-in function
function del(arr, position) {
    arr.splice(position, 1);
    return arr;
}
console.log(del([1, 2, 3, 8, 4, 5, 6, 7], 3));