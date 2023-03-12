//  Make html pages

const express = require("express");
const path = require("path");

const app = express();
const PORT = "5000";
const publicPath = path.join(__dirname, 'public')

// static method load the static file or pages
app.use(express.static(publicPath))

app.listen(PORT);