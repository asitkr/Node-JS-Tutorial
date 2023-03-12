// Asynchronous Basic nodejs

let a = 10;
let b = 20;

// console.log(a);

// setTimeout(() => {
//     let b = 100;
//     console.log(b);
// }, 2000)

// console.log(b);

let promise = new Promise((res, rej) => {
    setTimeout(() => {
        res(200);
    }, 3000)
})

promise.then((data) => {
    console.log(a + data);
});