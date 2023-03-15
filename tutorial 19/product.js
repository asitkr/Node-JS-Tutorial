const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String
})

module.exports = mongoose.model('products', schema);
