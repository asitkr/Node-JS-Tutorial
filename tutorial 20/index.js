const express = require("express");
require('./config');
const product = require("./product");

const PORT = "5000";
const app = express();

app.use(express.json());

app.listen(PORT);