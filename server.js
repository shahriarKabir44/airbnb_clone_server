const express=require('express')
require('dotenv').config()
const server=express()

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
    var PORT = process.env.PORT || 3000;
    app.listen(PORT)
    
}