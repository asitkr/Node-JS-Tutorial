// Connect node with mongodb

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const getData = async () => {
    let result = await client.connect();
    let db = result.db('e-com');
    let collection = db.collection('products');
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData();