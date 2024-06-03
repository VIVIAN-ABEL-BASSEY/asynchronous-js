// // Example using callbacks from note
// function fetchData(callback) {
//     setTimeout(() => {
//       console.log('Data fetched!');
//       callback();
//     }, 5000);
//   }

//   fetchData(() => {
//     console.log('Callback executed.');
//   });
// //  the setTimeout used here is an inbuilt function in js that delays the execution of a task,
// // it takes 2 parameters, 1st parameter is the function to be executed after the time elapse, 2nd parameter is the wait time in milisecond
// //   }

// //   or using a named function my method
// // function printOut(callback){
// //     console.log('Data fetched!');
// //       callback();
// // }
// // setTimeout(printOut,5000)
  

// // instructor method using named function
// function fetchData1(){
//     let printOut1 =()=>{
//         console.log("data1 fetched");
//     }
//     setTimeout(printOut1,10000);
// }
// fetchData1()
// console.log("woow")


// function downloadFile(call){
//     const start =() =>{
//         console.log("downloading")
//         setTimeout(call,1000) //comment line(38,41) and uncomment line(40) to see more on 
//     }
//     // setTimeout(start,20000);
//     start()
// }

// const onSucess =()=>{
//     console.log("file is sucessfully downloaded")
// }
// // asynchronous operation
// console.log("staring async...")
// // downloadFile(onSucess)
// downloadFile(()=>{console.log("file is sucessfully downloaded anonymously")})
// console.log("ending async...")
// console.log("go to the next async...")
// console.log("go to the next next async...")

// function sendEmail() {
//     const start = () => {//Start function
//         console.log('Sending...');
//     } 
//     return new Promise((resolve, reject) => {
//         start();//Call start
//         // setTimeout(() => resolve(), 10000);//Wait for 10s then call success
//          setTimeout(()=>reject(),5000)
//     });
// } 

// // Asynchrnous operation
// sendEmail().then(() => {//then will be call beecause of resolve/success from promise
//     console.log('Email sent successfully');
// }).catch((err)=>{
//     console.log("email was not sent")
// })

// // Assigment my method
// function checkNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let number = Math.floor(Math.random()*5);
//             console.log("number is:",number)
//             if (number>=3){
//                 resolve("it's a sucess number")
//             }else {
//                 reject("it's a fail number")
//             }
//         },5000
//         )
//     })
// }

// checkNum().then((sucess)=>{
//     console.log(sucess)
// }).catch((fail)=>{
//     console.log(fail)
// })


// assignment soln tutor
// function sendMail(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const value = Math.floor(Math.random()*5)
//             if(value>=3){
//                  const response ={//JSON data format
//                     status:400,
//                     message:"number is: " + value + " and it's a sucess"
//                  }
//                  resolve(response)
//             }
//             if(value>=3){
//                 const error ={//JSON data format
//                    status:400,
//                    message:"number is" + value + "and it's a sucess"
//                 }
//                 reject(error)
//             }
//         },5000)
//     })
// }

// // asynchronous operation
// sendMail().then((res)=>{
//     console.log("sucess status ",res.status)
//     console.log("sucess messagee ",res.message)
// }).catch((err)=>{
//     console.log("failure status ",err.status)
//     console.log("failure messagee ",err.message)
// })


// let axios = {
//     get (url) {
//         const start = () => {//Start function
//             console.log('Requesting from...', url);
//         } 
//         return new Promise((resolve, reject) => {
//             start();//Call start
//             // setTimeout(() => resolve(), 10000);//Wait for 10s then call success
//             // setTimeout(() => reject(), 10000);//Wait for 10s then call 
//             const task = () => {
//                 const value = Math.floor(Math.random() * 5);//Generate random number 0 - 4
//                 if(value >= 3){ // Value greater than 3 is success
//                     const response = {//JSON data format
//                         status: 200, 
//                         message: "Number is " + value + " and its a success"
//                     }
//                     resolve(response);
//                 }else{//Value less than 3 is failure
//                     const error = {//JSON data format
//                         status: 400, 
//                         message: "Number is " + value + " and its a failure"
//                     }
//                     reject(error);
//                 }
//             }
//             setTimeout(task, 5000)
//         });
//     }
// }

// axios.get("https://google.com")
//     .then((res) => {
//         console.log('Success Status', res.status);
//         console.log('Success Message', res.message);
//     }).catch((err) => {
//         console.log('Error Status', err.status);
//         console.log('Error Message', err.message);
//     })


//  chained asynchrous operation
// because this is a chained asynchrous operation, step 2 will always wait until step one is done blf step 2 will run
// function stepOne() {
//     return new Promise((resolve) => {
//         // setTimeout 2 parameters
//         ///Use this
//         setTimeout(() => {
//             resolve('Step One Completed');
//         }, 1000);
//         //setTimeout 3 parameters Or Use this
//         setTimeout(resolve, 1000, 'Step One Completed')
//     });
//  }
// function stepTwo(message){
//     console.log(message)
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             resolve("step 2 completed");
//         }),2000;
//     })
// }

// stepOne()
//     .then(stepTwo)
//     .then(result =>{
//         console.log(result)
//     }).catch(err =>{
//         console.log(err)
//     })

const promise1 = Promise.resolve('Promise 1 resolved');
const promise2 = new Promise((resolve) => {
    setTimeout(resolve, 2000, 'Promise 2 resolved')
});
const promise3 = new Promise((resolve) => setTimeout(resolve, 1000, 'Promise 3 resolved'));
//  const promise4 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'Promise 4 rejected'));
//  const promise5 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'Promise 5 rejected'));

Promise.all([promise1, promise2, promise3])
  .then(values => {
    for(value of values){//using for of loop,this gives the values directly
        console.log(value);
    }

    // for(let i=0;i<values.length;i++){//using normal for loop, this will give the index so to get the value you do the values[i]
    //     console.log(values[i])
    // }

    // for(value in values){//using for in loop, this will give the index so to get the value you do the values[i]
    //         console.log(values[value]);
    //     }
  })
  .catch(errors => {
    console.log(errors)
  });



  let users = [];

// Example using async/await
function register(user) {
    return new Promise(resolve => {
      setTimeout(() => {
        users = [...users, user];
        const response = {
            status: 201,
            message: 'Welcome to GoMyCode',
            users: users
        }
        resolve(response);
      }, 2000);
    });
}
  
let user1 = {
    first_name: "Taiwo",
    last_name: "John"
}
register(user1)
    .then(result => {
        console.log('Status', result.status);
        console.log('Message', result.message);
        console.log('Users', result.users);
    })
  
let user2 = {
    first_name: "Bello",
    last_name: "Muiz"
}
register(user2)
    .then(result => {
        console.log('Status', result.status);
        console.log('Message', result.message);
        console.log('Users', result.users);
    })

let user3 = {
    first_name: "Gbolahan",
    last_name: "Amusa"
}
register(user3)
    .then(result => {
        console.log('Status', result.status);
        console.log('Message', result.message);
        console.log('Users', result.users);
    })