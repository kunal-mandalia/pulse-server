const ioEvents = require('./io-events')

const mockIo = {
  on: jest.fn(),
  sockets: {
    emit: jest.fn()
  }
}
const mockSocket = {
  on: jest.fn()
}

describe(`io-events`, () => {
  // execute io-events control flow, ensuring all callbacks are called
  // which populates mockSocket and mockIo
  ioEvents(mockIo)
  const cb_socket = mockIo.on.mock.calls[0][1]
  const socketConnection = cb_socket(mockSocket)
  const eventData = { type: 'page', value: '/home' }
  const cb_socketEvent = mockSocket.on.mock.calls[0][1]
  const socketEvent = cb_socketEvent(eventData)
  const cb_socketDisconnect = mockSocket.on.mock.calls[1][1]
  const socketDisconnect = cb_socketDisconnect()

  it(`should listen for connection`, () => {
    expect(mockIo.on.mock.calls[0][0]).toEqual('connection')
  })
  
  it(`Then emit connectionCount on new connection`, () => {
    expect(mockIo.sockets.emit.mock.calls[0][0]).toEqual('connectionCount')
    expect(mockIo.sockets.emit.mock.calls[0][1]).toEqual(1)
  })

  it(`should emit event across all sockets upon receiving event`, () => {
    expect(mockSocket.on.mock.calls[0][0]).toEqual('event')
    expect(mockIo.sockets.emit.mock.calls[1][0]).toEqual('event')
    const { type, value } = mockIo.sockets.emit.mock.calls[1][1]
    expect({ type, value }).toEqual(eventData)
  })

  it(`should emit connectionCount across all sockets on socket disconnect`, () => {
    expect(mockSocket.on.mock.calls[1][0]).toEqual('disconnect')
    expect(mockIo.sockets.emit.mock.calls[2][0]).toEqual('connectionCount')    
    expect(mockIo.sockets.emit.mock.calls[2][1]).toEqual(0)    
  })
})
