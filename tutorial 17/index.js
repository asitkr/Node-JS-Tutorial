const mongoose = require("mongoose");

const url = 'mongodb://localhost:27017/e-com';

const main = async () => {
    await mongoose.connect(url);

    const schema = new mongoose.Schema({
        name: String,
        price: Number
    });

    const modal = mongoose.model('products', schema);

    let data = new modal({name: "M 8", price: 10000});
    let result = await data.save();

    console.log(result);
}

main();