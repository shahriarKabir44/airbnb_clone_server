const jwt=require('jsonwebtoken')

const userSchema=require('../schemas/userSchema')

 class User {
      
    async findOne(query) {
        return await userSchema.findOne(query)
    }
    async login({ email, password }) {
        var user = await this.findOne({ email: email, password: password })
         if (user) {
             user=user._doc
            var token = jwt.sign(JSON.stringify({...user,password:null}), process.env.jwtSecret)
            var payload = { ...user, password: null }
             return {
                token: token,
                user: payload
            }
        }
        else return null
    }
    async register({ email, password }) {
        if (!await this.findOne({ email: email, password: password })) {
            var newUser = {
                email: email,
                password: password,
            }
            
            let newData=new userSchema(newUser)
            await newData.save()
             var token = jwt.sign({...newData['_doc'],password:null }, process.env.jwtSecret)
            return {
                token: token,
                user: {...newData['_doc'],password:null }
            }
        }
        else {
            return null
        }
    }
}

module.exports= User