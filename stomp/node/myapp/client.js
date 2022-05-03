Object.assign(global, { WebSocket: require('ws') });
const StompJs = require('@stomp/stompjs');

const BROKER_URL = process.env.BROKER_URL || 'ws://localhost:15674/ws';

const client = new StompJs.Client({
  brokerURL: BROKER_URL,
  connectHeaders: {
    login: 'guest',
    passcode: 'guest'
  },
  debug: function (str) {
    console.log(str);
  },
  reconnectDelay: 5000,
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000,
});

client.onConnect = function (frame) {
  //
  console.log('on connect: %s', frame);
};

client.onStompError = function (frame) {
  console.log('Broker reported error: ' + frame.headers['message']);
  console.log('Additional details: ' + frame.body);
};

client.activate();
