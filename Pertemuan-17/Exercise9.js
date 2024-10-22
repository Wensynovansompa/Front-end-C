// a. Function helloWorld
const helloWorld = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000);
    });
  };
  
  // b. Function async messages
  const messages = async () => {
    const msg = await helloWorld();
    console.log(msg);
  };
  
  // c. Memanggil function messages
  messages();
