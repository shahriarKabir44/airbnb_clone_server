
const House=require('./House')

class Booking{
     
    static isReserved({userId, location}){
        for(let booking of this.bookings){
             if(booking.userId==userId && booking.locationId==location && booking.status){
                return {
                    isBooked: true,
                    data: booking
                }
            }
        }
        return {
            isBooked: false,
            data: null
        }
    }
    static createBooking({locationId,startDate,endDate,userId,cost }){
        if(this.isReserved({userId:userId,location:locationId}).isBooked){
            return {
                success: 0,
                message:"Room already booked!"
            }
        }
        let newBooking={
            locationId:locationId,
            startDate:startDate*1,
            endDate:endDate*1 ,
            userId:userId,
            Id: this.bookings.length,
            status:1,
            cost:cost
        }
        this.bookings.push(newBooking)
         return {
            success: 1,
            data:newBooking
        }
    }
    static cancelBooking({locationId, userId,bookingId}){
        if(!this.isReserved({userId:userId,location:locationId})){
            return {
                success:0,
                message: "Room is not reserved!"
            }
        }
        for(let booking in this.bookings){
            if(booking.Id==bookingId){
                booking.status=0
                break
            }
        }
        return {
            success:1,
            message:"Reservation successfully cancelled!"
        }
    }
}
module.exports= Booking