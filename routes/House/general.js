const House=require('../../models/House')

const houseController=require('express').Router()

houseController.get('/getAllHouses',(req,res)=>{
    res.send({data: House.getAll()})
})

houseController.get('/getHouse/:Id',(req,res)=>{
     res.send({data: House.findOne(req.params.Id)})
})

module.exports=houseController