// creating single file outer file
// const fs = require("fs");
// fs.writeFileSync('apple.txt', 'This is a apple file');


// get path name
const { log } = require("console");
const fs = require("fs");
const path = require("path");
// to get directory name
const dirName = path.join(__dirname, 'file');

// console.log(dirName);

// creating single file
// fs.writeFileSync(dirName+"/apple.txt", "This is a apple file");


// Creating file in loop
for(let i=0; i<5; i++) {
    fs.writeFileSync(dirName+`/hello${i}.txt`, "This file is created by loop");
    // fs.writeFileSync(dirName+`/hello+i+.txt`, "This file is created by loop");
}


// finding file from folder
fs.readdir(dirName, (err, files) => {
    // getting file in to array form
    console.log(files);
    files.forEach((item) => {
        console.log(item);
    })
})