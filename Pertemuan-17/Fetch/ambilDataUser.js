// a. Function AmbilDataUsere
export const ambilDataUser = () => {
  // b. menggunakan fetch  
  fetch("https://reqres.in/api/users")
      // c. gunakan fetch untuk melakukan fetch
      .then(response => response.json())

      // d. menambahkan then yang kedua
      .then(({ data }) => {
        // e.
        data.forEach(user => {
          console.log(`${user.first_name} ${user.last_name}`);
        });
      });
  };
  