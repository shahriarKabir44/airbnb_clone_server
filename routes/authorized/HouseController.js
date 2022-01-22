const House = require('../../models/House')
 
const HouseController = require('express').Router()
let house=new House()



HouseController.post('/hostHouse',  async (req, res) => {
     
    let newData=req.body
    house.createnew(newData)
        .then(data=>{
            res.send({data:{
                success: true,
                info: data
            }})
        })
     
})

HouseController.post('/updateImage',(req,res)=>{
    let {_id, imageURL}=req.body
    house.findByIdAndUpdate(_id,imageURL)
        .then((data)=>{
            res.send({data: data})
        })  
})


module.exports=HouseController 