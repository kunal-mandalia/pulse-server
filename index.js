
const port = 8080
const handler = require('./server/middlewares/handler')(port)
const app = require('http').createServer(handler)
const io = require('socket.io')
require('./server/io-events')(io)(app)

app.listen(port)
console.log(`Started Pulse-Server on port ${port}`)