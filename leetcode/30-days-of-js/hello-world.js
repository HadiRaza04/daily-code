// create-hello-world-function
// https://leetcode.com/problems/create-hello-world-function/?envType=study-plan-v2&envId=30-days-of-javascript
// Description - Write a function createHelloWorld. It should return a new function that always returns "Hello World".
var createHelloWorld = function() {
    return () => "Hello World";
};
console.log(createHelloWorld()); // [Function (anonymous)]
