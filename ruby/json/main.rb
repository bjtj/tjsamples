require 'json'

my_hash = JSON.parse('{"hello": "goodbye"}')
puts my_hash["hello"]

my_hash = {:hello => "goodbye"}
puts JSON.generate(my_hash)
