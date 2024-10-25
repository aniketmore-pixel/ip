// Step 1: Create a promise that resolves or rejects after 2 seconds
const snackPromise = new Promise((resolve, reject) => {
  const snackArrived = true;  // Change to false to show a rejected promise

  console.log("Waiting for the snack...");

  setTimeout(() => {
    if (snackArrived) {
      resolve("Yay! Your snack arrived!");  // Success case
    } else {
      reject("Oh no! Snack delivery failed!");  // Failure case
    }
  }, 2000);  // 2-second delay to simulate waiting
});

// Step 2: Handle the promise using .then() for success and .catch() for failure
snackPromise
  .then((message) => {
    console.log(message);  // This runs if the promise is resolved
  })
  .catch((error) => {
    console.log(error);  // This runs if the promise is rejected
  });
