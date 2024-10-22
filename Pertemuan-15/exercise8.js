import { yearUntilRetirement } from './retirement.js';
import { addNumber } from './addNumber.js';
import { calculateArea } from './calculateArea.js';
import { makeAjaxRequest } from './makeAjaxRequest.js';

//Mengunakan modul yearUntilRetirement
yearUntilRetirement({ year: 1987, firstName: 'John' });

//Menggunakan modul addNumber
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

//Menggunakan modul calculateArea
let radius = 21;
const area21 = calculateArea({ radius });

radius = 7;
const area7 = calculateArea({ radius });

console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

//Mengggunakan modul makeAjaxRequest
makeAjaxRequest('www.google.com');