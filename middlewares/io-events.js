const ioFlow = ioLib => app => {
  let connections = []
  let events = []
  
  const io = ioLib(app)
  io.on('connection', (socket) => {
    connections.push(socket)
    io.sockets.emit('connectionCount', connections.length)
    
    socket.on('event', function (data) {
      events.push(data)
      io.sockets.emit('event', Object.assign({}, data, {timestamp: Date.now(), connectionCount: connections.length })) // emit to all sockets
    })
  
    socket.on('disconnect', (socket) => {
      connections.splice(connections.indexOf(socket).id, 1)
      io.sockets.emit('connectionCount', connections.length)
    })
  })
}

module.exports = ioFlow