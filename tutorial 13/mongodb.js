const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbConnection = async () => {
    let result = await client.connect();
    let db = result.db('e-com');
    return db.collection('products'); 
}

module.exports = dbConnection;