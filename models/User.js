const jwt=require('jsonwebtoken')

const userSchema=require('../schemas/userSchema')

 class User {
      
    async findOne(query) {
        return await userSchema.findOne(query)
    }
    async login({ email, password }) {
        var user = await this.findOne({ email: email, password: password })
         if (user) {
            var token = jwt.sign(JSON.stringify(user), process.env.jwtSecret)
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
            this.this.userList.push(newUser)
            var token = jwt.sign(JSON.stringify(newUser), process.env.jwtSecret)
            var payload = { ...newUser, password: null }
            let newData=new userSchema(newUser)
            await newData.save()
            return {
                token: token,
                user: {...newData }
            }
        }
        else {
            return null
        }
    }
}

module.exports= User