const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    img: {
        type: String,
    }
}, { timestamps: true })



const Product = mongoose.model('Product', productSchema);

module.exports = { Product }