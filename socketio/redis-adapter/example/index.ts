import dotenv from 'dotenv';

dotenv.config();

import express, { type Express } from "express";
import * as http from "http";
import cors from 'cors';

import { Server, } from "socket.io";
import { createAdapter } from "@socket.io/redis-adapter";
import { createClient } from "redis";
import { Emitter } from "@socket.io/redis-emitter";

const PORT = process.env.PORT ?? '3000';

// const io = new Server();

const app: Express = express();
app.use(cors());
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/../public'));
app.use('/socketio', express.static(__dirname + '/../node_modules/socket.io-client/dist'));

const server = http.createServer(app);
const io = new Server(server);

const pubClient = createClient({ url: "redis://localhost:6379" });

const emitter = new Emitter(pubClient);

const subClient = pubClient.duplicate();

Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
  io.adapter(createAdapter(pubClient, subClient));
  //io.listen(4000); <-- no need by using Server.listen
});

io.on("connection", (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('chatter', function(message) {
      console.log('message : ' + message);
      io.emit('chatter', message)
      // emitter.emit('chatter', message); <-- not necessary
  });
});

app.get('/', (req, res) => {
    res.render('index');
});

server.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });

