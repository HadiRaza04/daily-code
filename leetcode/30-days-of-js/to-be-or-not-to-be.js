// 2704. To Be Or Not To Be
// https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript

var expect = function(val) {
    return {
        toBe : (val1) => {
            if(val1 === val) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        } ,
        notToBe: (val2) => {
            if(val2 !== val) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    }
};
console.log(expect(5).toBe(5)); // true
console.log(expect(5).toBe(null));  // error