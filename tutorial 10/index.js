const express = require("express");
const app = express();

// middleware
const createMiddleware = (req, res, next) => {
    // console.log("Middleware created");

    if(!req.query.age) {
        res.send("Please provide your age");
    }
    else if(req.query.age < 18) {
        res.send("You cannot access this page");
    }
    else if(req.query.age >= 18) {
        res.send("You can access this page");
    }
    else {
        next();
    }
}

const PORT = "5000";
app.use(createMiddleware);

app.get('/', (req, res) => {
    res.send("Welcome to Home Page")
})

app.get('/user', (req, res) => {
    res.send("Welcome to User Page")
})


app.listen(PORT);