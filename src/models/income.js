const mongoose = require("mongoose")
const Schema = moongose.Schema

//definir reglas para el ingreso
const Income = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    value: {                    //validaciones
        type: Number,
        min: 5000,
        max: 1500000
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

 //funcion de moongose pre se ejecuta antes de
Income.pre('save', function(next){         //funcion que se ejecuta antes de guardar
    if(this.value >= 50000){
        this.value -= 1000 
    }
})    

module.exports = moongose.model('incomes', Income)