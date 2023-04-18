function User(sock, redis) {
  var self = this;
  self.sock = sock;
  self.redis = redis;

  // redis event
  self.onRedis = function (ch, json) {
    var msg = JSON.parse(json);
    switch (msg.action) {
      case "message":
        self.onRedisMessage(msg);
        break;
      case "pm":
        self.onRedisPM(msg);
        break;
    }
  };

  self.redis.on(self.onRedis);

  // sock event
  self.onSock = function (json) {
    var msg = JSON.parse(json);
    switch (msg.action) {
      case "message":
        self.onSockMessage(msg);
        break;
      case "pm":
        self.onSockPM(msg);
        break;
    }
  };

  self.sock.on("data", self.onSock);

  self.sock.on("close", function () {
    self.redis.off(self.onRedis);
  });
}

User.prototype.pub = function (msg) {
  this.redis.pub(msg);
};

User.prototype.write = function (msg) {
  this.sock.write(JSON.stringify(msg));
};

// sock event
User.prototype.onSockMessage = function (msg) {
  this.pub(msg);
};

User.prototype.onSockPM = function (msg) {
  this.pub(msg);
  msg.action = "pm_sent";
  this.write(msg);
};

// redis event
User.prototype.onRedisMessage = function (msg) {
  this.write(msg);
};

User.prototype.onRedisPM = function (msg) {
  if (msg.target.id == this.id) {
    this.write(msg);
  }
};

module.exports = User;
