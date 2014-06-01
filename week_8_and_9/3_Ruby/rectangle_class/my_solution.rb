# U3.W8-9: Implement a Rectangle Class


# I worked on this challenge [by myself, with: ].

# 2. Pseudocode
=begin 
create a rectangle class
define an initialize method with 2 arguments
	width and height, and create class variables

define method perimeter that takes perimeter
define method area that takes area
define method diagonal that finds the diagonal
define method square? that returns a boolean if a square
=end


# 3. Initial Solution
class Rectangle
  attr_accessor :width, :height

  def initialize(width, height)
    @width  = width
    @height = height
  end

  def ==(other)
    (other.width  == self.width && other.height == self.height ) ||
    (other.height == self.width && other.width  == self.height )
  end

  def perimeter
  	@width * 2 + @height * 2
  end

  def area
  	@width * @height
  end

  def diagonal
  	Math.sqrt(@width ** 2 + @height ** 2)
  end

  def square?
  	@height == @width
  end
end




# 4. Refactored Solution






# 1. DRIVER TESTS GO BELOW THIS LINE
rectangle = Rectangle.new(4, 5)
puts rectangle.perimeter == 18
puts rectangle.area == 20
puts rectangle.diagonal == Math.sqrt(41)
puts rectangle.square? == false

square = Rectangle.new(5, 5)
puts square.square? == true

# 5. Reflection 
=begin 
this seemed like a very simple exercise for phase 3! 
there isn't much to talk about to the solution of this 
challenge. Although,  I'm not too sure what the existing 
solution does.
=end