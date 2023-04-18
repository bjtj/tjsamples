var redis = require("redis");
var cfg = {
  channel: "chat",
};

function Redis() {
  this.publisher = redis.createClient({ url: "redis://localhost:6379" });
  this.subscriber = redis.createClient({ url: "redis://localhost:6379" });

  this.listeners = [];

  this.publisher.connect();
  this.subscriber.connect().then(() => {
    this.subscriber.subscribe(cfg.channel, (msg) => {
      this.listeners.forEach((l) => {
        l(cfg.channel, msg);
      });
    });
  });
}

Redis.prototype.pub = function (msg) {
  this.publisher.publish(cfg.channel, JSON.stringify(msg));
};

Redis.prototype.on = function (callback) {
  this.listeners.push(callback);
};

Redis.prototype.off = function (callback) {
  this.listeners = this.listeners.filter((l) => l !== callback);
};

module.exports = Redis;
