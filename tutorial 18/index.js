const mongoose = require("mongoose");

const url = 'mongodb://localhost:27017/e-com';
mongoose.connect(url);

const schema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String
})

const saveInToDB = async () => {
    const model = mongoose.model('products', schema);

    let data = new model({
        name: '8T', 
        brand: 'Oneplus', 
        price: 40000, 
        category: 'Mobile'
    });

    let result = await data.save();

    console.log(result);
}

const updateDB = async () => {
    const Product = mongoose.model('products', schema);

    let data = await Product.updateOne(
        {name: "SE"}, {$set: {price: 35000, name: "8 SE"}}
    )

    console.log(data);
}

const deleteFromDB = async () => {
    const Product = mongoose.model('products', schema);

    let data = await Product.deleteOne({
        name: 'M 8'
    })

    console.log(data);
}

const findFromDB = async () => {
    const Product = mongoose.model('products', schema);

    let data = await Product.findOne({name: '8 T'});
    let allData = await Product.find();

    console.log(data);
    console.log(allData);
}

// saveInToDB();
// updateDB();
// deleteFromDB();
findFromDB();