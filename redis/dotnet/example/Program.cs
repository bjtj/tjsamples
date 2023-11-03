using System.Threading;
using NRedisStack;
using NRedisStack.RedisStackCommands;
using StackExchange.Redis;

//...

ConnectionMultiplexer redis = ConnectionMultiplexer.Connect("localhost");
// IDatabase db = redis.GetDatabase();

ISubscriber sub = redis.GetSubscriber();

sub.Subscribe("messages", (channel, message) => {
  Console.WriteLine("RECV: " + message.ToString());
});

Console.WriteLine("SEND: hello");
sub.Publish("messages", "hello");

Thread.Sleep(3000);
