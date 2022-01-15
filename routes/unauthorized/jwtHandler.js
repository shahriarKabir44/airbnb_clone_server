const jwt=require('jsonwebtoken')

function verifyAuthTokenAdmin(req, res, next) {
    var authHeader = req.headers['authorization']
     var token = authHeader && authHeader.split(' ')[1]
     
     if (!token) res.send({ data:{ unauthorized: true,  user: null  }  })
    else {
       
        jwt.verify(token, process.env.jwtSecret, (err, user) => {
            if (err) {
                res.send({ data:{ unauthorized: true,  user: null  }  })
            }
            else {
                 req.user = user 
                next()
            }
        })
    }
}

module.exports=verifyAuthTokenAdmin