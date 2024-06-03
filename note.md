Definition Of Async Programming
Understanding Promises
Consuming Promises
Queuing Promises
Iterating with Async/ await
Error Handling


--> 
Asynchronous programming is a programming paradigm(patterns) that deals with the execution of tasks or operations concurrently, allowing a program to perform non-blocking operations. In traditional synchronous programming, each operation is executed sequentially, and the program waits for each operation to complete before moving on to the next one. Asynchronous programming, on the other hand, enables a program to initiate operations and continue executing other tasks without waiting for the completion of the ongoing operations.

Key concepts in asynchronous programming include: Callbacks, Promises(create, consume, Queue) and async/await, error handling.

1) Callbacks: Callbacks are functions that are passed as arguments to other functions and are executed after the completion of an asynchronous operation or at a later time. Callbacks are a fundamental building block of asynchronous programming.

// Example using callbacks
function fetchData(callback) {
  setTimeout(() => {
    console.log('Data fetched!');
    callback();
  }, 5000);
}

fetchData(() => {
  console.log('Callback executed.');
});

2) Promises: A Promise represents a value that may be available now, or in the future, or never. It has states such as "pending," "fulfilled," or "rejected.". Promises provide a cleaner and more structured way to handle asynchronous operations.

// Example using promises
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Data fetched!');
      resolve();
    }, 1000);
  });
}

fetchData().then(() => {
  console.log('Promise resolved.');
});

3) Creating Promises:

You create a promise using the Promise constructor.
The constructor takes a function with two parameters: resolve and reject.
Inside this function, you perform your asynchronous operation.
If the operation is successful, you call resolve with the result.
If there's an error, you call reject with the reason for the failure.

function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 0) {
      resolve('Number is positive');
    } else {
      reject('Number is not positive');
    }
  });
}

// Usage
checkNumber(5)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });



4) Consuming Promises:

You consume a promise using the .then() and .catch() methods.
The .then() method is used when the promise is fulfilled, and it takes a callback function that receives the result.
The .catch() method is used when the promise is rejected, and it takes a callback function that receives the reason for the rejection.

function stepOne() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Step One Completed');
    }, 1000);
  });
}

function stepTwo(message) {
  console.log(message);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Step Two Completed');
    }, 2000);
  });
}

stepOne()
  .then(stepTwo)
  .then(result => {
    console.log(result);
  })
  .catch (err => {
    console.log(err)
  })


5) Queuing promises

"Queuing promises" refers to the order in which promises are scheduled to execute in JavaScript. When you create and use promises, they are placed in a queue, and their execution order is determined by the event loop.

The JavaScript event loop is responsible for handling asynchronous operations, including promises. The event loop maintains a queue of tasks, and promises are added to this queue when they are created or when they are resolved or rejected.

const promise1 = Promise.resolve('Promise 1 resolved');
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Promise 2 resolved'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 1000, 'Promise 3 resolved'));

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values);
  });

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

console.log('Start');

delay(1000)
  .then(() => console.log('Promise 1 resolved'));

delay(500)
  .then(() => console.log('Promise 2 resolved'));

console.log('End');

6) Async/Await: Introduced in ECMAScript 2017, async/await is a syntactic sugar on top of promises, making asynchronous code more readable and resembling synchronous code. The async keyword is used to define a function that returns a promise, and the await keyword is used to wait for the resolution of a promise.

// Example using async/await
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved after 2 seconds');
    }, 2000);
  });
}

resolveAfter2Seconds()
  .then(result => {
    console.log(result);
  })

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: 'resolved after 2 seconds'
}

asyncCall();

Asynchronous programming is particularly important in scenarios where tasks may take some time to complete, such as network requests, file I/O, or user input. It helps prevent blocking the main execution thread, allowing applications to remain responsive and handle multiple tasks concurrently.

7) Error handling 
Error handling in promises involves using the .then and .catch() method to handle errors. 

function asyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        resolve('Task completed successfully');
      } else {
        reject(new Error('Task failed'));
      }
    }, 1000);
  });
}

// Usage
asyncTask()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

// Looking at a real world example 
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    // Simulating fetching user data from a server
    setTimeout(() => {
      const users = {
        1: { name: 'John', age: 30 },
        2: { name: 'Alice', age: 25 }
      };
      const user = users[userId];
      if (user) {
        resolve(user);
      } else {
        reject(new Error('User not found'));
      }
    }, 1000);
  });
}

async function getUserDetails(userId) {
  try {
    const user = await fetchUser(userId);
    console.log('User Details:', user);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Usage
getUserDetails(1);
getUserDetails(3); // This will trigger an error
