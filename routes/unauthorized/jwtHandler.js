const jwt=require('jsonwebtoken')

function verifyAuthTokenAdmin(req, res, next) {
    var authHeader = req.headers['jeffreyepstein']
    var token = authHeader && authHeader.split(' ')[1]
    if (!token) res.send({ data:{ unauthorized: true,  user: null  }  })
    else {
        jwt.verify(token, process.env.jwt_secret, (err, user) => {
            if (err) {
                res.send({ data:{ unauthorized: true,  user: null  }  })
            }
            else {
                req.user = user._doc
                next()
            }
        })
    }
}

module.exports=verifyAuthTokenAdmin