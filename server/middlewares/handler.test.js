const handler = require('./handler')

describe(`handler`, () => {
  const port = 3000
  const req = jest.fn()
  const res = {
    writeHead: jest.fn(),
    end: jest.fn()
  }
  
  it(`should return 200 stating running port`, () => {
    handler(port)(req, res)
    expect(res).toBeCalled
    expect(res.writeHead.mock.calls[0][0]).toEqual(200)
    expect(res.end.mock.calls[0][0]).toContain(`${port}`)
  })
})
