

const Booking=require('../../models/Booking')

 
let booking=new Booking()
const reservationController=require('express').Router()
reservationController.post('/CreateBooking',  (req,res)=>{
    res.send({data: booking.createBooking(req.body)})
})

reservationController.post('/CancelReservation',(req,res)=>{
    res.send({data:booking.cancelBooking(req.body)})
})

reservationController.post('/IsReserved',(req,res)=>{
    res.send({data:booking.isReserved(req.body)})
})

reservationController.post('/GetBookingList',(req,res)=>{
    res.send({data:booking.getBookingList(req.body)})
})

module.exports= reservationController