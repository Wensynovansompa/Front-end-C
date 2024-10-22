import { helloWorld } from './helloWorld.js';  // Import module helloWorld jika dalam file berbeda

// b. function async message
const messages = async () => {
  const msg = await helloWorld();
  console.log(msg);
};


// c. Memanggil Function message
messages(); // Output: "Hello World!" setelah 2 detik
