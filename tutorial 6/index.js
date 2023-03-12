const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello World, Home Page</h1>");
})

app.get("/about", (req, res) => {
    res.send("<h1>Hello World,</h1> <a href='/'>go to Home Page</a>");
})
app.get("/contact", (req, res) => {
    res.send("Hello World, Contact Page");
})
app.get("/blog", (req, res) => {
    res.send([
        {
            'name': 'Raunak',
            'email': 'abc@gmail.com'
        },
        {
            'name': 'Shayam',
            'email': 'xxx@gmail.com'
        }
    ]);
})

app.listen("5000");