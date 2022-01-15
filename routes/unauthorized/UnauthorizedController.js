

const User=require('../../models/User')
const verifyAuthoToken=require('./jwtHandler')

const unauthorizedController=require('express').Router()

let user=new User()

unauthorizedController.post('/Register',(req,res)=>{
    res.send({data:user.register(req.body)})
})
unauthorizedController.post('/Login',(req,res)=>{
    res.send({data:user.login(req.body)})

})
unauthorizedController.get('/IsAuthorized', verifyAuthoToken, (req,res)=>{
     res.status(200).send({ data: req.user })
})

module.exports = unauthorizedController