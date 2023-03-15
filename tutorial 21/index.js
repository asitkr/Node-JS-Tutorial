const express = require("express");
const multer = require("multer");
// require("./config");
// const Product = require("./product");

const PORT = "5000";
const app = express();

// app.use(express.json());

const uploadFile = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, "uploads")
        },
        filename: function(req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
}).single("user_file")

app.post("/upload", uploadFile, (req, res) => {
    res.send("uploaded successfully");
})

app.listen(PORT);
