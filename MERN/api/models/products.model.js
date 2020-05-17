const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    item: {type:String, required:true},
    imageUrl:{type:String, required:true},
    price: {type:Number, required:true},
    qty: {type:Number, required:true}
})

const Products = mongoose.model('Products', productSchema);

module.exports = Products;