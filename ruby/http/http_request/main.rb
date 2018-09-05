require 'net/http'
require 'uri'
require 'json'

def get
  puts '[GET]'
  url = URI.parse('http://www.example.com/index.html')
  req = Net::HTTP::Get.new(url.to_s)
  res = Net::HTTP.start(url.host, url.port) {|http|
    http.request(req)
  }
  puts res.body
end

def post
  puts '[POST]'
  uri = URI.parse('http://httpbin.org/post')

  header = {'Content-Type': 'text/json'}
  user = {user: {
            name: 'Bob',
            email: 'bob@example.com'}
         }

  http = Net::HTTP.new(uri.host, uri.port)
  req = Net::HTTP::Post.new(uri.request_uri, header)
  req.body = user.to_json

  res = http.request(req)
  puts res.body
end


# https://github.com/ruby/ruby/blob/trunk/lib/net/http/requests.rb
class MyRequest < Net::HTTPRequest
  METHOD = 'PUNCH'
  REQUEST_HAS_BODY = false
  RESPONSE_HAS_BODY = false
end

def custom
  uri = URI('http://localhost:5000')
  Net::HTTP.start(uri.host, uri.port) do |http|
    req = MyRequest.new uri
    res = http.request req
  end
end


# 
get
post
custom
