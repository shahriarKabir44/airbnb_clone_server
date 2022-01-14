
const houseSchema=require('../schemas/houseSchema')
class House{
     
     async getAll(query){
        return await houseSchema.find()
    }
     async findOne(Id){
         return await houseSchema.findOne({query})
    }
}
module.exports= House