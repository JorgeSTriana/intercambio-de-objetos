const mongoose = require("mongoose")
const Schema = moongose.Schema

const Product = new Schema({
    value: Number,
    price: Number
})

Product.pre('save', function(next){
    this.price = this.value / 0.81
    next()
})

module.exports = mongoose.model('products', Product)