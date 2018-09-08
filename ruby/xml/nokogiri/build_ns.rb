require 'nokogiri'


builder = Nokogiri::XML::Builder.new { |xml|
  xml.root('xmlns:f' => 'fake') do
    xml.parent.namespace = xml.parent.namespace_definitions.first
    xml.project {
      xml.name 'good project'
      xml.parent.elements.first.namespace = nil
      xml.status 'good'
      xml.subproject('xmlns' => 'default') do
        xml.count 0
      end
      xml.icons {
        xml.parent.namespace = nil
        xml.icon {
          xml.url 'icon.ico'
        }
        xml.weird {
          xml.content('text content') {
            xml.sub
            xml.parent_ ('special')
            # xml.parent.add_child(Nokogiri::XML::Text.new('hello', xml))
          }
        }
      }
    }
  end
}


puts builder.to_xml
