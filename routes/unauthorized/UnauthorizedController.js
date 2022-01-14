

const User=require('../../models/User')
const verifyAuthoToken=require('./jwtHandler')

const unauthorizedController=require('express').Router()

unauthorizedController.post('/Register',(req,res)=>{
    res.send({data:User.register(req.body)})
})
unauthorizedController.post('/Login',(req,res)=>{
    res.send({data:User.login(req.body)})

})
unauthorizedController.post('/IsAuthorized', verifyAuthoToken, (req,res)=>{
    res.status(200).send({ data: req.user })
})

module.exports = unauthorizedController