//2. 
//Modul menambahkan angka
export const addNumber = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
