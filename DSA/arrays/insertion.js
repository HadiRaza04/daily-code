// Without built-in function
function insertion(arr, newEle, position) {
    for(let i=arr.length - 1; i>=position; i--) arr[i+1] = arr[i];
    arr[position] = newEle;
    return arr;
}
console.log(insertion([1, 2, 3, 5, 6, 7, 8], 4, 3));  // [1, 2, 3, 4, 5, 6, 7, 8]


// Using built-in function
function insert(arr, newEle, position) {
    arr.splice(position, 0, newEle);
    return arr;
}
console.log(insert([1, 2, 3, 5, 6, 7, 8], 4, 3));  // [1, 2, 3, 4, 5, 6, 7, 8]