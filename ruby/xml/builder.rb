require 'builder'

def get_xml
  xml = Builder::XmlMarkup.new :indent => 2
  xml.instruct! :xml, :encoding => "utf-8"
  xml.product do |p|
    p.name "Test"
  end
end

puts get_xml
