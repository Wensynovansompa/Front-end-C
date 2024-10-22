//Exercise 7 Nama: Sompa, Wensy

// 1. Destructuring (Object)
const calculateAge = ({ birthYear }) => 2023 - birthYear;

const yearUntilRetirement = ({ year, firstName }) => {
  const age = calculateAge({ birthYear: year });
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};

yearUntilRetirement({ year: 1987, firstName: 'John' });


// 2. Destructuring menggunakan rest operator (Array)
const addNumber = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));


// 3. Destructuring mengambil sebagian item (Array)
const radius = [21, 7, 10];
let [radius21, radius7] = radius;

const phi = 3.14;
const calculateArea = ({ radius }) => phi * Math.pow(radius, 2);

const area21 = calculateArea({ radius: radius21 });
const area7 = calculateArea({ radius: radius7 });

console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);


// 4. Destructuring menggunakan default value (Object)
const makeAjaxRequest = ({ url, method = 'GET' }) => {
  console.log(`Request to ${url} using method: ${method}`);
};

makeAjaxRequest({ url: 'www.google.com' });
