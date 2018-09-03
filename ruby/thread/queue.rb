#!/usr/bin/env ruby

require 'thread'

queue = Queue.new

producer = Thread.new do
  5.times do |i|
    sleep rand(i)
    queue << i
    puts "#{i} produced"
  end
end

consumer = Thread.new do
  5.times do |i|
    value = queue.pop
    sleep rand(i/2)
    puts "consumed #{value}"
  end
end


consumer.join
