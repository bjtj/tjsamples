require 'webrick'

root = File.expand_path 'public_html'
server = WEBrick::HTTPServer.new :Port => 8000, :DocumentRoot => root

# mount proc
server.mount_proc '/hello' do |req, res|
  res.status = 200
  res['Content-Type'] = 'text/plain'
  res.body = "Hello\n"
end

# mount
class SimpleHandler < WEBrick::HTTPServlet::AbstractServlet
  def do_GET(req, res)
    res.status = 200
    res['Content-Type'] = 'text/plain'
    res.body = "hello world - #{req.path}\n"
  end
end
server.mount '/simple', SimpleHandler

trap 'INT' do server.shutdown end

server.start
