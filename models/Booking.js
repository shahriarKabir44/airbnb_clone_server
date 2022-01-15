
const House=require('./House')
const bookingSchema=require('../schemas/bookingSchema')
class Booking{
    constructor(){
        this.House=new House()
    }
     
    async isReserved({userId, location}){

        let result=await bookingSchema.findOne({ $and:[
            {userId:userId},
            {locationId: location},
            {status: {$eq: 1}}
        ]})

        if(!result ){
            return {
                isBooked: false,
                data: null
            }
        }
        return {
            isBooked: true,
            data: result
        }
         
    }
    async createBooking({locationId,startDate,endDate,userId,cost }){
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
            status:1,
            cost:cost
        }
        let newData=new bookingSchema(newBooking)
        await newData.save()

         return {
            success: 1,
            data:{...newData}
        }
    }
    async cancelBooking({locationId, userId,bookingId}){
        if(!this.isReserved({userId:userId,location:locationId})){
            return {
                success:0,
                message: "Room is not reserved!"
            }
        }

        await bookingSchema.findOneAndUpdate({$and:[
            {_id: bookingId},
            {status:{$eq:1}}
        ]},{status:1})

         
        return {
            success:1,
            message:"Reservation successfully cancelled!"
        }
    }
}
module.exports= Booking