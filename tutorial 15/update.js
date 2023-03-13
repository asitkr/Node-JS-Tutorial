// Update
const dbConnection = require('./mongodb');

const updateData = async () => {
    let data = await dbConnection();
    let result = await data.updateOne(
        {name: '13 Pro Max'}, {$set: {name: '13 Pro Max', price: 10000}}
    )
    console.log(result);
}

updateData();