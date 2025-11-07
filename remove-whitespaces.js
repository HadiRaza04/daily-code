// Without built-in function
function removeWhitespace(str) {
    let withoutWhiteSpace = "";
    for(let i=0; i<str.length; i++) {
        if(str[i] !== " ") {
            withoutWhiteSpace += str[i];
        }
    }
    return withoutWhiteSpace;
}
console.log(removeWhitespace("white space thi jfu "));


// Using built-in function
function remWhitespace(str) {
    let withoutWhiteSpace = str.split("").filter(e => e != " ").join("");
    return withoutWhiteSpace;
}
console.log(remWhitespace("white space thi jfu "));