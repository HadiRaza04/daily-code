// WithOut using Built-in Function
function urlEncoding(str) {
    let url = ""
    for(let i=0; i<str.length; i++) {
        if(str[i] == " " ){
            url = url + "%20"
        } else {
            url = url + str[i]
        }
    }
    return url;
}
console.log(urlEncoding("hel 29 ha hdgye "));    // hel%2029%20ha%20hdgye%20


// Using Built-in Function
function url_encoding(url) {
    url= url.split(" ").join("%20")
    return url;
}
console.log(url_encoding("https://mm shh shh"));    // https://mm%20shh%20shh