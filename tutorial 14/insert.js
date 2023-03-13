const dbConnection = require('./mongodb');

const insert = async () => {
    const db = await dbConnection();

    // for single data inserted at a time
    // const result = await db.insertOne({
    //     name: '3 Pro',
    //     brand: 'Realme',
    //     price: 12000,
    //     category: 'Mobile'
    // })


    // multiple data inserted at a time
    const result = await db.insertMany([
        { name: 'M 21', brand: 'Samsung', price: 19000, category: 'Mobile' },
        { name: '13', brand: 'iphone', price: 70000, category: 'Mobile' },
        { name: 'F 21', brand: 'Samsung', price: 17000, category: 'Mobile' },
        { name: 'V 21', brand: 'Vivo', price: 14000, category: 'Mobile' },
        { name: 'Nord 2', brand: 'Oneplus', price: 29000, category: 'Mobile' }
    ])

    console.log(("Insert function get called", result));

    if(result.acknowledged) {
        console.log('Data Inserted');
    }
}

insert();