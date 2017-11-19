const app = require('http').createServer(handler)
const port = 8080
const io = require('socket.io')

require('./middlewares/io-events')(io)(app)

app.listen(port)
console.log(`Started Pulse-Server on port ${port}`)

function handler (req, res) {
  res.writeHead(200)
  res.end(`Pulse-Server is running on ${port}`)
}
