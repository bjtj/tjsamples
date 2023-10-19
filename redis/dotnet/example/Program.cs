using System.Threading;
using NRedisStack;
using NRedisStack.RedisStackCommands;
using StackExchange.Redis;

//...

ConnectionMultiplexer redis = ConnectionMultiplexer.Connect("127.0.0.1");
// IDatabase db = redis.GetDatabase();

ISubscriber sub = redis.GetSubscriber();

sub.Subscribe("messages", (channel, message) => {
  Console.WriteLine((string)message);
});

sub.Publish("messages", "hello");

Thread.Sleep(10000);
