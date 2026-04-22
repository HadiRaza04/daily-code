const sum_up_to_10 = (arr) => {
    let newArr = [];
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length; j++) {
            if(i != j) {
                if(arr[i] + arr[j] === 10) {
                    newArr.push([arr[i], arr[j]]);
                }
            }
        }
    }
    for(let i=0; i<newArr.length; i++) {
        for(let j=i+1; j<newArr.length; j++) {
            if(newArr.includes(newArr[j])) {
                newArr.splice(j, 1);
            }
        }
    }
    return newArr;
}
console.log(sum_up_to_10([1, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
// const sum_up_to_10 = (arr) => {
//     let newArr = [];
//     for(let i=0; i<arr.length; i++) {
//         for(let j=0; j<arr.length; j++) {
//             if(i != j) {
//                 if(arr[i] + arr[j] === 10) {
//                     newArr.push([arr[i], arr[j]]);
//                 }
//             }
//         }
//     }
//     return newArr;
// }
// console.log(sum_up_to_10([1, 1, 2, 3, 4, 5, 6, 7, 8, 9]));