// // Life & Callback

// (function () {
//     console.log("Hello World");
// })();

// // With Params

// let output = (function (fullName) {
//     console.log("Hello" + fullname);
// })("John Doe");

// console.log(output);



// 1. Callback Function
// No Params Argument & Return Value
function sayHello(Callback){
    Callback();
}

// function greetings(){
//     console.log("Hello Saitama")
// } 

sayHello(function(){
    console.log("Hello Saitama")
});

// with params & arguments & return value

function sayHello(Callback){
    let output = Callback("John Doe");
    return output;
}

sayHello (function (fullName)) {
    return "Hello" + fullName;
}