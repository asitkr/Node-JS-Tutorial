// Template engine

const express = require('express');
const app = express();

const PORT = "5000";

app.set('view engine', 'ejs');

app.get('/profile', (req, res) => {
    const user = {
        name: "Aashit",
        email: "aashit@gmail.com",
        city: 'Noida'
    }
    res.render('profile', {user});
})

app.listen(PORT);