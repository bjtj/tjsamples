# https://stackoverflow.com/a/8011413

require 'nokogiri'

builder = Nokogiri::XML::Builder.new { |xml|
  xml.root('xmlns' => 'default', 'xmlns:foo' => 'bar') do
    xml.tenderlove
  end
}
puts builder.to_xml
