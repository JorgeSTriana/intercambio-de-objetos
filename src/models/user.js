const mongoose = require('mongose')
const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('user', User)