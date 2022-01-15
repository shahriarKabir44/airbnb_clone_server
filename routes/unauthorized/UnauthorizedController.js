

const User=require('../../models/User')
const verifyAuthoToken=require('./jwtHandler')

const unauthorizedController=require('express').Router()

let user=new User()

unauthorizedController.post('/Register',async (req,res)=>{
    let data=await user.register(req.body)
     res.send({data:data})
})
unauthorizedController.post('/Login',async (req,res)=>{
    res.send({data:await user.login(req.body)})

})
unauthorizedController.get('/IsAuthorized', verifyAuthoToken, (req,res)=>{
     res.status(200).send({ data: req.user })
})

module.exports = unauthorizedController