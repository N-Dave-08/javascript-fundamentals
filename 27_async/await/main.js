function makeReq(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processReq(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing reponse");
    resolve(`Extra Information + ${response}`);
  });
}

// makeReq("Google")
//   .then((response) => {
//     console.log("Reponse Received");
//     return processReq(response);
//   })
//   .then((processedResponse) => {
//     console.log(processedResponse);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// converting above code from then()/catch() to async/await
// async makes a function return a Promise
// await pauses execution until a Promise settles (resolve or reject)
async function doWork() {
  try {
    const res = await makeReq("Google");
    console.log("Reponse Received");
    const processedResponse = await processReq(res);
    console.log(processedResponse);
  } catch (error) {
    console.log(error);
  }
}

doWork();
