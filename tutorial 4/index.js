// CURD operation with file system
const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "curd");

const filePath = `${dirPath}/hello.txt`;

// fs.writeFileSync(dirName+"/apple.txt", "This a apple file created.") // 1st way to create
// fs.writeFileSync(filePath, "This is hello file."); // 2st way to create


// Read file
// fs.readFile(filePath, 'utf8', (err, item) => {
//     console.log(item);
// })


// Update file
// fs.appendFile(filePath, "And this file is updated", (err) => {
//     if(!err) {
//         console.log("file is updated");
//     }
// })


// file name rename
// fs.rename(filePath, `${dirPath}/hello_world.txt`, (err) => {
//     if(!err) {
//         console.log("file name changed");
//     }
// })


// File delete
fs.unlinkSync(`${dirPath}/hello_world.txt`);