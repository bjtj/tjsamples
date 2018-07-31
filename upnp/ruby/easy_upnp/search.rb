require 'easy_upnp'

searcher = EasyUpnp::SsdpSearcher.new
devices = searcher.search 'ssdp:all'

puts devices
