const House=require('../models/House')

const houseController=require('express').Router()

let house=new House()

houseController.get('/getAllHouses',(req,res)=>{
    res.send({data: house.getAll()})
})

houseController.get('/getHouse/:_id',(req,res)=>{
     res.send({data: house.findOne({_id:req.params._id})})
})

module.exports=houseController