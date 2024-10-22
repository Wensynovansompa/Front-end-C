function hitungBMI(berat, tinggi){
    const bmi = berat / (tinggi * tinggi);
    return bmi;
}

const beratBadan = 60;
const tinggiBadan = 1.7;

const bmi = hitungBMI(beratBadan, tinggiBadan);
console.log("BMI saya adalah " + bmi);