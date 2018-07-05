require 'nokogiri'

xml_str = <<EOF
<things type="Container">
  <Id type="Property">1234</Id>
  <Name type="Property">The Name</Name>
</things>
EOF


doc = Nokogiri::XML(xml_str)


thing = doc.at_xpath('//things')
puts "ID   = " + thing.at_xpath('//Id').content
puts "Name = " + thing.at_xpath('//Name').content


doc.xpath('//things').each do |thing|
  puts "ID   = " + thing.at_xpath('//Id').content
  puts "Name = " + thing.at_xpath('//Name').content
end
