const House=require('../models/House')

const houseController=require('express').Router()

let house=new House()

houseController.get('/getAllHouses', async (req,res)=>{
    let resp=await  house.getAll()
    res.send({data: resp})
})

houseController.get('/getHouse/:_id', async (req,res)=>{
     res.send({data:await house.findOne({_id:req.params._id})})
})

module.exports=houseController