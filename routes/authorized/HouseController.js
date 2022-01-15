const House = require('../../models/House')

const verifyToken = require('../unauthorized/jwtHandler')

const HouseController = require('express').Router()
let house=new House()
HouseController.post('/hostHouse', verifyToken,(req, res) => {
    console.log(req.body);
})