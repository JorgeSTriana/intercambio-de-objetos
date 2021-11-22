const moongose = require ('mongoose')
const Schema = moongose.Schema

const Outcome = new Schema({
    user: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'User'
    },
    value: Number,
    createdAT: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('outcomes', Outcome)