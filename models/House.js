
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
        let newData=new houseSchema(hostingInfo)
        await newData.save()
        return {
            success: true,
            data:newData['_doc']
        }
    }
}
module.exports= House