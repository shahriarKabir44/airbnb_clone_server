var mongoose = require('mongoose')

var houseSchema = new mongoose.Schema({
    picture:{ type: String },
    type: { type: String },
    town:{ type: String },
    title: { type: String },
    price: { type: String },
    description: { type: String },
    ownerId:{ type:  mongoose.Schema.ObjectId }
 })

const House = mongoose.model('House', houseSchema)
module.exports = House