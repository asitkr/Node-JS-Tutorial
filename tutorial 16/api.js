const express = require('express');
const mongodbConnection = require('./mongodb');
const mongodb = require("mongodb");
const app = express();
const PORT = '5000';

// use middleware
app.use(express.json());

app.get('/', async (req, res) => {
    let data = await mongodbConnection();
    data = await data.find().toArray();
    res.send(data);

    console.log(data);
})

app.post('/', async (req, res) => {
    // console.log(req.body);
    // res.send({name: "Raunak"});
    // res.send(req.body);


    // post data into database or mongodb
    let data = await mongodbConnection();
    let result = await data.insertOne(req.body);

    res.send(result);
})


app.put('/', async (req, res) => {
    // console.log(req.body);
    let data = await mongodbConnection();
    let result = await data.updateOne(
        // {name: 'F 21'}, {$set: {price: 13000}}
        {name: 'F 21'}, {$set: req.body}
    )
    res.send(req.body);
})


app.delete('/:id', async (req, res) => {
    console.log(req.params.id);

    let data = await mongodbConnection();
    let result =  await data.deleteOne({
        _id: new mongodb.ObjectId(req.params.id)
    })

    res.send(result);
})

app.listen(PORT);