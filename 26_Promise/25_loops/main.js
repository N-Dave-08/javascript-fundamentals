// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value

{
  let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
      resolve("success");
    } else {
      reject("failed");
    }
  });

  p.then((message) => {
    console.log("This is in the then()", message);
  }).catch((message) => {
    console.log("This is in the catch()", message);
  });
}

{
  console.log("==== callbacks verison ====");

  const userLeft = false;
  const userWatchingCatMeme = false;

  function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
      errorCallback({ name: "user left", message: ":(" });
    } else if (userWatchingCatMeme) {
      errorCallback({
        name: "user watching cat meme",
        message: "webDevSimplified < Cat",
      });
    } else {
      callback("thumbs up and subscribe");
    }
  }

  watchTutorialCallback(
    (message) => {
      console.log("Succcess:", message);
    },
    (error) => {
      console.log(error.name + " " + error.message);
    },
  );
}

// convert the callback functions above into Promise
{
  console.log("==== promise verison ====");

  const userLeft = false;
  const userWatchingCatMeme = false;

  function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
      if (userLeft) {
        reject({ name: "user left", message: ":(" });
      } else if (userWatchingCatMeme) {
        reject({
          name: "user watching cat meme",
          message: "webDevSimplified < Cat",
        });
      } else {
        resolve("thumbs up and subscribe");
      }
    });
  }

  watchTutorialPromise()
    .then((message) => {
      console.log("Succcess:", message);
    })
    .catch((error) => {
      console.log(error.name + " " + error.message);
    });
}

// Promise methods
{
  const recordVideoOne = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Video 1 Recorded");
    }, 3000);
  });

  const recordVideoTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Video 2 Recorded");
    }, 1000);
  });

  const recordVideoThree = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Video 3 Recorded");
    }, 2000);
  });

  // executes when all promises are fullfilled
  // Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  //   (messages) => {
  //     console.log(messages);
  //   },
  // );

  // settles as soon as the first promise settles and does not wait for the others
  // returns only a single value (or rejection reason)
  Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
    (message) => {
      console.log(message);
    },
  );
}
