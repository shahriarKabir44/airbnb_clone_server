
const houseSchema=require('../schemas/houseSchema')
class House{
     
     async getAll(){
        return await houseSchema.find({})
    }
     async findOne(query){
         return await houseSchema.findOne({query})
    }
    async findMany(query){
        return await houseSchema.find({query})
    }
    async createnew(hostingInfo){
        let newData=new houseSchema({
            type:hostingInfo.type,
            town:hostingInfo.town,
            title:hostingInfo.title,
            description:hostingInfo.description,
            price: hostingInfo.price,
            ownerId:hostingInfo.ownerId,
        })
        await newData.save()
        return {
            success: true,
            data:newData['_doc']
        }
    }
    async findByIdAndUpdate(id,url){
        await houseSchema.findByIdAndUpdate(id,{picture: url})
        return {data:{
            success: true
        }}
    }
}
module.exports= House