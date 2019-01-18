# Overview

gPRC App using node. Playground for gPRC, node.

## Installation

First, clone this repo and change to the directory:
```bash
git clone git@github.com:pmtargosz/<project>.git
cd <project>
```

### Install

```bash
npm install
npm i -g grpcc
```

### Commands
Run server:
```bash
npm start
```

In another terminal, again from the project directory, run the following command:
```bash
grpcc -i -p protos/hello.proto -a 127.0.0.1:50051
```

Execute commands within this environment to run a client that calls our gRPC service
Run service
```bash
client.echo({message:"Hello"}, printReply)
```

### Run Dev Environment

```bash
npm run server
# http://localhost:3030
```

## Resources
* [grpc](https://grpc.io/grpc/node) - Node.js gRPC library
* [mali](https://mali.js.org) - A minimalistic gRPC microservice framework
* [article](https://auth0.com/blog/creating-a-node-grpc-service-using-mali)

## License
[MIT](https://opensource.org/licenses/MIT)
