const House = require('../../models/House')

const HouseController = require('express').Router()
let house=new House()
HouseController.post('/hostHouse', async (req, res) => {
    console.log(req.file );
    res.send({data: "await house.createnew(req.body)"})
})


module.exports=HouseController 