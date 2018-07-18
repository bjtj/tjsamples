class Box

  @@count = 0
  
  def initialize(w, h)
    @width, @height = w, h
    @@count += 1
  end

  def printWidth
    @width
  end

  def printHeight
    @height
  end

  def getWidth
    @width
  end

  def getHeight
    @height
  end

  private :getWidth, :getHeight

  def printArea
    @area = getWidth() * getHeight()
    ptus "Bix box area is : #@area"
  end

  protected :printArea

  def getArea
    @width * @height
  end

  def self.printCount
    puts "Box count is : #@@count"
  end

  def to_s
    "(w:#@width,h:#@height)"
  end
end


box = Box.new(10, 20)


x = box.printWidth()
y = box.printHeight()

puts "Width of the box is : #{x}"
puts "Height of the box is : #{y}"

a = box.getArea()
puts "Area of the box is : #{a}"

Box.printCount
box2 = Box.new(30, 100)
Box.printCount()

puts "String representation of box is : #{box}"

a = box.getArea()
puts "Area of the box is : #{a}"
# box.printArea()                 # expected -- protected method `printArea' called


# subclass
class BigBox < Box
  
  def printArea
    @area = @width * @height
    puts "Big box area is : #@area"
  end

  def getArea
    @area = @width * @height
    puts "Big box area is : #@area"
  end

  def info
    puts "Type of self = #{self.type}"
    puts "Name of self = #{self.name}"
  end
end

box = BigBox.new(10, 20)
box.printArea()

box.getArea

