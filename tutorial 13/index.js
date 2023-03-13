// Read file from mongodb

// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// const dbConnection = async () => {
//     let result = await client.connect();
//     let db = result.db('e-com');
//     return db.collection('products'); 
// }

// dbConnection().then(res => {
//     res.find({brand: 'iPhone'}).toArray().then(data => console.log(data));
// })

const dbConnection = require('./mongodb')

const main = async () => {
    // console.log('main function called');

    let data = await dbConnection();
    data = await data.find().toArray();
    console.log(data);
}
main();