const express = require("express");
require("./config");
const Product = require("./product");

const app = express();
const PORT = "5000";
app.use(express.json());

// CURD operations
app.post("/create", async (req, res) => {
    let data = new Product(req.body)
    let result = await data.save();
    console.log(result);
    res.send(result);
})

app.get("/list", async (req, res) => {
    let data = await Product.find();
    res.send(data);
})

app.delete("/delete/:_id", async (req, res) => {
    console.log(req.params);
    let data = await Product.deleteOne(req.params)
    res.send(data);
})

app.put("/update/:_id", async (req, res) => {
    console.log(req.body);
    let data = await Product.updateOne(
        req.params,
        {$set: req.body}
    )
    res.send(data);
})

app.listen(PORT);