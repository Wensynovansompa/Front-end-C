// function hitungBMI(berat, tinggi){
//     const bmi = berat / (tinggi * tinggi);
//     return bmi;
// }

// const beratBadan = 60;
// const tinggiBadan = 1.7;

// const bmi = hitungBMI(beratBadan, tinggiBadan);
// console.log("BMI saya adalah " + bmi);


//1. LIFE

function hitungBMI(berat, tinggi) {
    const bmi = berat / (tinggi * tinggi);
    return bmi;
}


const beratBadan = 60;
const tinggiBadan = 1.7;


//2. Callback

function tampilkanHasilBMI(bmi) {
    console.log("BMI saya adalah " + bmi);
}

const bmi = hitungBMI(beratBadan, tinggiBadan);
tampilkanHasilBMI(bmi);