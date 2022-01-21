const House = require('../../models/House')
const multer=require('multer')

const fs=require('fs')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
      },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const uploadImg = multer({storage: storage}).single('file');

const HouseController = require('express').Router()
let house=new House()

function base64_encode(file) {
    return "data:image/gif;base64,"+fs.readFileSync(file, 'base64');
}

HouseController.post('/hostHouse',uploadImg, async (req, res) => {
    let base64img=base64_encode(req.file.path)
    fs.unlinkSync(req.file.path)
    console.log();
    fs.writeFileSync('routes/authorized/test.txt',base64img)
    let newData={...JSON.parse(req.headers['data']),picture: base64img}
    house.createnew(newData)
        .then(data=>{
            res.send({data:data})
        })
     
})


module.exports=HouseController 