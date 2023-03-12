const express = require("express");
const useFilter = require("./middleware");
const app = express();

const PORT = "5000";

// middleware
// const useFilter = (req, res, next) => {
//     if(!req.query.age) {
//         res.send('Please provide age');
//     }
//     else if(req.query.age < 18) {
//         res.send("You are under age")
//     }
//     else {
//         next()
//     }
// }

// app.use(useFilter);

app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
})

app.get("/user", useFilter, (req, res) => {
    res.send("You are on User Page")
})

app.get("/about", (req, res) => {
    res.send("You are on About Page")
})

app.listen(PORT);