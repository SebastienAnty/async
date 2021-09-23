// const { rejects } = require("assert");
// const fs = require("fs");
// const { resolve } = require("path/posix");
// const { promisify } = require("util");

// const readData = fs.readFileSync("./data.json");
//  console.log (readData.toString())
 
// fs.readFile("./data.json", (err, myData)=> {
//     console.log(myData.toString())
// })

// // Promises Callbacks

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("hello world");
//     }, 2000);
// });

// // Promises Practice

// const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(1);
//     }, 1000);
// });
// const p2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(2);
//     }, 500);
// });

// Promise.all([p1,p2]).then((values) => console.log(values));

// // async promises




const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(10);
    }, 1000);
});

async function returnPromise() {
    const value = await promise
    console.log(value)
    return "5"
}
returnPromise().then((val)=>{
    console.log(val)
});