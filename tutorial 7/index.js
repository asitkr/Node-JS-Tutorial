//  Make html pages

const express = require("express");
const path = require("path");

const app = express();
const PORT = "5000";
const publicPath = path.join(__dirname, 'public')

// static method load the static file or pages
// app.use(express.static(publicPath))

// Updating url without file extension
// sendFile method we can load a file
app.get('', (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
})

app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/About.html`);
})

app.get('/help', (req, res) => {
    res.sendFile(`${publicPath}/Help.html`);
})

app.get('*', (req, res) => {
    res.sendFile(`${publicPath}/404.html`);
})

app.listen(PORT);