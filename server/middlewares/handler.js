const handler = port => (req, res) => {
  res.writeHead(200)
  res.end(`Pulse-Server is running on ${port}`)
}

module.exports = handler