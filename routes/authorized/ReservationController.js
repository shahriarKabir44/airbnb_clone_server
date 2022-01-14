

const Booking=require('../../models/Booking')



const reservationController=require('express').Router()
reservationController.post('/CreateBooking',  (req,res)=>{
    res.send({data: Booking.createBooking(req.body)})
})

reservationController.post('/CancelReservation',(req,res)=>{
    res.send({data:Booking.cancelBooking(req.body)})
})

reservationController.post('/IsReserved',(req,res)=>{
    res.send({data:Booking.isReserved(req.body)})
})

reservationController.post('/GetBookingList',(req,res)=>{
    res.send({data:Booking.getBookingList(req.body)})
})

module.exports= reservationController