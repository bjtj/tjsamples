require 'active_support/core_ext/hash/conversions'
require 'yaml'

xml = '<root><person key="val"><name>tj</name></person></root>'
puts "[xml]\n\n'''\n#{xml}\n'''\n\n"
hash = Hash.from_xml(xml)
puts "[hash]\n\n'''\n#{hash}\n'''\n\n"
yaml = hash.to_yaml
puts "[yaml]\n\n'''\n#{yaml}\n'''\n\n"

