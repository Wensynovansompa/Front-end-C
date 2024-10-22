// //Array & Object
// //1. Array
// // deklarasi variable array
// // Array Literal

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// //cara 2. Array kata kunci new
// let numbers2 = new Array(6, 7, 8, 9, 10);
// console.log(numbers2)

// //tipe data dalam array
// let numbers = [1, 2, 3, 4, 5]; //numbers
// let students = ["angel", "fahrul", "dea"]; //string
// let john = ["john", 30, true, [30, 60, 90]]; // perbaikan pada array internal
// console.log(john);

// //Array length
// console.log(numbers.length);
// console.log(students.length);
// console.log(john.length);

// //Mengakses element tertentu dalam array
// //melalui index selalu dimulai dari nol
// console.log(numbers[2])

// //Mengakses element terakhir dalam array
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers.length);
// console.log(numbers(numbers.length-1));

// //Array method
// let array = [1, 2, 3, "hallo", false, true];
// console.log(array);
// console.log(array.toString());
// console.log(array.join(" "));
// console.log(array.join("-"));

// //array pop
// array.pop();
// console.log(array);
// //array push
// array.push();
// console.log(array);
// //array shift
// array.shift();
// console.log(array);
// //array


// //array splice
// array.splice(3, 0, 4, 5);
// console.log(array);

// // //concat
// let buah = ["pisang", "apel", "jeruk"];
// let sayur = ["tomat", "bayam", "wortel"];
// let biji = ['kedelai', "kacang tanah", "kacang hijau"];

// let makanan = buah.concat(sayur, biji);
// console.log(makanan);

// // //slice
// let sayuran = makanan.slice(3, 6);
// console.log(sayuran);