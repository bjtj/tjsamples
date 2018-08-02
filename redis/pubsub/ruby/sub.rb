require 'redis'
redis = Redis.new
redis.subscribe("my-channel") do |on|
  on.message do |channel, message|
    puts "channel: #{channel}, message: #{message}"
  end
end
