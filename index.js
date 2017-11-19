
const port = process.env.PORT || 8080
const handler = require('./server/middlewares/handler')(port)
const app = require('http').createServer(handler)
const io = require('socket.io')(app)
require('./server/io-events')(io)

app.listen(port)
console.log(`Started Pulse-Server on port ${port}`)