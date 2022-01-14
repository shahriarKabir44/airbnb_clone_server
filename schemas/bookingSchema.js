var mongoose = require('mongoose')

var bookingSchema = new mongoose.Schema({
    locationId:{ type:  mongoose.Schema.ObjectId },
    startDate:{ type: String },
    endDate:{ type: String },
    userId:{ type:  mongoose.Schema.ObjectId },
     status:{ type: String },
    cost:{ type: String }
})

const House = mongoose.model('House', bookingSchema)
module.exports = House