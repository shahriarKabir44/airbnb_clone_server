

const Booking=require('../../models/Booking')

 
let booking=new Booking()
const reservationController=require('express').Router()
reservationController.post('/CreateBooking', async  (req,res)=>{
    res.send({data:await  booking.createBooking(req.body)})
})

reservationController.post('/CancelReservation',async (req,res)=>{
    res.send({data:await booking.cancelBooking(req.body)})
})

reservationController.post('/IsReserved',async (req,res)=>{
    res.send({data:await booking.isReserved(req.body)})
})



module.exports= reservationController