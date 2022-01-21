
const houseSchema=require('../schemas/houseSchema')
class House{
     
     async getAll(){
        return await houseSchema.find({})
    }
     async findOne(query){
         return await houseSchema.findOne({query})
    }
    async createnew(hostingInfo){
        let newData=new houseSchema(hostingInfo)
        await newData.save()
        return {
            duccess: true,
            data:newData['_doc']
        }
    }
}
module.exports= House