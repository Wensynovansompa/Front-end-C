// // javaScript
// // cara 1
// // tanpa inport (parameter) dan ouput

// function greatings1() {
//     console.log("Hello World");

// }
// greatings1(); //call function

// // cara 2
// let greatings2 = function () {
//     console.log("Hello World");
// };
// greatings2(); //call function

//Dengan input (parameter) dan output (return value)
// Cara 1
//                  Parameter
// function greatings1(fullName) {
//     return " Hello " + fullName;
// }

// //              Argument adalah value atau parameter yang di berikan
// let output = greatings1("John Doe");
// console.log(output)

// // cara 2
// let greatings2 = function (fullName) {
//     return "Hello " + fullName
// } ;
// let ouput = greatings2("John Doe");
// console.log(output2);

// Global & local scope

let x = 10;

function foo(){
    let y = 20
    console.log(x); // 10
    console.log(y); // 20

    if (z < x){
        let a ; // local
        console.log(a); // 40
    }
}

// console.log(y); // error
foo();