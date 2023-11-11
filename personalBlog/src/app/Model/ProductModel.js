const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: {type:String},
    image: {type:String},
    price: {type:Number},
});

module.exports = mongoose.model('Product',Product)