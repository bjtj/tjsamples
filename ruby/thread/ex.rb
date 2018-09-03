#!/usr/bin/env ruby

# https://ruby-doc.org/core-2.2.0/Thread.html

thr = Thread.new { puts 'Whats the big deal' }

thr.join

