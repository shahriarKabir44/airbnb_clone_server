const House = require('../../models/House')

const verifyToken = require('../unauthorized/jwtHandler')

const HouseController = require('express').Router()

HouseController.post('/hostHouse', verifyToken,(req, res) => {
    console.log(req.body);
})