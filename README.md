# pulse-server [![CircleCI](https://circleci.com/gh/kunal-mandalia/pulse-server.svg?style=svg)](https://circleci.com/gh/kunal-mandalia/pulse-server)

Realtime analytics with socket.io inspired by segment.io debugger

## Overview
This is the backend to the Pulse project. Responsibile for establishing the websocket connections (socket.io) with clients.

Socket.io events handled:
- `connect` will emit `connectionCount` to all sockets
- `event (data: object)` will emit event data in addition to connection count and timestamp to all sockets
- `disconnect` will emit `connectionCount` to all sockets

## Get started
### Install
- `git clone https://github.com/kunal-mandalia/pulse-server.git`
- `cd pulse-server`
- `yarn install`
- `yarn start` will run the server on `http://localhost:8080`

### Run tests
- `yarn test` to run jest tests once
- `yarn test:watch` to run jest tests in watch mode

## Contributing
PRs are welcome

## License
MIT