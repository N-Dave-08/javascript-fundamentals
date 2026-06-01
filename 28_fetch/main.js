// GET
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     if (res.ok) {
//       console.log("SUCCESS");
//     } else {
//       console.log("Not Successful");
//     }
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log("ERROR"));

// POST
// fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "fake user created",
//   }),
// })
//   .then((res) => {
//     if (res.ok) {
//       return res.json();
//     } else {
//       console.log("Not Successful");
//     }
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log("ERROR"));

// ==== async/await version ====

// GET
// async function fetchUsers() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users/24");
//     if (res.ok) {
//       const data = await res.json();
//       console.log(data);
//       console.log("SUCCESS");
//     } else {
//       console.log("Not Successful");
//     }
//   } catch (error) {
//     console.log("ERROR");
//   }
// }

// fetchUsers();

// POST
async function createUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "fake user created again",
      }),
    });
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      console.log("SUCCESS");
    } else {
      console.log("Not Successful");
    }
  } catch (error) {
    console.log("ERROR");
  }
}

createUser();
