require 'redis'
redis = Redis.new
redis.publish(ARGV[0], ARGV[1])
