var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    password: { type: String },
    email: { type: String },
})

const User = mongoose.model('User', userSchema)
module.exports = User