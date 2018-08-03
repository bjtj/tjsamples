require 'digest'

puts Digest::MD5.hexdigest 'abc'

md5 = Digest::MD5.new
md5.update "ab"
md5 << "c"
puts md5.hexdigest

md5.reset
md5 << "message"
puts md5.hexdigest
