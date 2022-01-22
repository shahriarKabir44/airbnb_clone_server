var mongoose = require('mongoose')

var bookingSchema = new mongoose.Schema({
    locationId:{ type:  mongoose.Schema.ObjectId },
    startDate:{ type: String },
    endDate:{ type: String },
    userId:{ type:  mongoose.Schema.ObjectId },
     status:{ type: String },
    cost:{ type: String },
    time:{type: String}
})

const Booking  = mongoose.model('Booking', bookingSchema)
module.exports = Booking 