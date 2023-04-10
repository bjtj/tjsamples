# socketio redis adapter + chat app example

## References

<https://medium.com/today-i-learned-chai/building-a-simple-chat-application-with-node-js-and-socket-io-a7d7b38fd028>

<https://socket.io/docs/v4/redis-adapter/>


## Preparation

```bash
$ npm i
```


## Usage

1. Start redis server
    - e.g.) `sudo service redis-server start`
2. Start more than two web server
    - e.g.) `PORT=3000 npm run dev`
    - e.g.) `PORT=3001 npm run dev`
3. open web browser
    - e.g.) `http://localhost:3000`
    - e.g.) `http://localhost:3001`
4. chat

