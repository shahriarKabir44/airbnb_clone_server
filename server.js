const express=require('express')
require('dotenv').config()

const cors=require('cors')

const verifyToken=require('./routes/unauthorized/jwtHandler')


const cluster = require('cluster');

const totalCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    for (let i = 0; i < totalCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        cluster.fork();
    });

} else {
    startExpress();
}

function startExpress() {
    const app = express();
    app.use(cors())
    app.use(express.json())
    var PORT = process.env.PORT || 4000;
    app.listen(PORT)
    app.get('/',(req,res)=>{
        res.send('efwnnfer')
    })
    app.use('/authorized/booking',verifyToken,require('./routes/authorized/ReservationController'))

    app.use('/unauthorized',require('./routes/unauthorized/UnauthorizedController'))

    app.use('/house/general/',require('./routes/House/general'))
}