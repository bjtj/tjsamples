# coding: utf-8
puts "[contains]"
puts 'abc'.include? 'c'

puts "[upper]"
puts 'aBc'.upcase

puts "[lower]"
puts 'aBc'.downcase

puts "[capital]"
puts 'aBc dEf'.capitalize

puts "[trim]"
puts ' aBc '.strip

puts "[split]"
puts 'a b c'.split
puts 'a,b,c'.split ','

puts "[splitlines]"
puts "a\nb\nc\n".lines

puts "[is empty]"
str = nil
# str = ''
# str = 'text'
puts str.to_s.empty?

puts ''.empty?
puts ''.to_s.empty?
puts 1.to_s.empty?

puts "[substring]"
puts 'abc def'[2..-1]

puts "[reverse]"
puts str = 'abc'
puts str.reverse
puts str.reverse!               # <- side effect

puts "[length]"
puts str.length

puts "[unicode]"
puts checkmark = "\u2713"

