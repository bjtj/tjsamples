

class XmlTag

  def initialize(name)
    @name = name
    @children = []
    @attributes = {}
  end

  attr_accessor :name, :attributes, :children

  def append(tag)
    @children.append(tag)
    return tag
  end
  
  def to_s
    elems = [@name] + @attributes.map {|k,v| "#{k}=\"#{v}\""}

    if @children.any?
      str = "<#{elems.join(' ')}>"
      str += @children.each {|elem| "#{elem}"}.join("")
      str += "</#{@name}>"
      return str
    else
      return "<#{elems.join(' ')} />"
    end
  end

end

class XmlText
  def initialize(text)
    @text = "#{text}"
    @text = escape(@text)
  end

  def escape(text)
    text.gsub('&', '&amp;').gsub('>', '&gt;').gsub('<', '&lt;')
  end

  def to_s
    @text
  end
end



def test
  tag = XmlTag.new 's:Envelope'
  tag.attributes = {
    's:encodingStyle' => "http://schemas.xmlsoap.org/soap/encoding/",
	'xmlns:s' => "http://schemas.xmlsoap.org/soap/envelope/"
  }
  body = tag.append XmlTag.new('s:Body')
  action = body.append XmlTag.new('u:SetTarget')
  param = action.append XmlTag.new('newTargetValue')
  param.append 10
  param2 = action.append XmlTag.new('param2')
  param3 = action.append XmlTag.new('param3')
  param3.append XmlText.new 'if (a > 10 && a < 20) ?'

  puts tag
end

test
