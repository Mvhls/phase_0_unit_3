# U3.W8-9: OO Basics: Student


# I worked on this challenge [by myself, with: ].

# 2. Pseudocode
=begin 
create a class called Student
define a method called initialize with two arguments
set the arguments = class objects

define a method called average
take the average of the students test scores

define a method called letter_grade
assign a letter grade based on students average test score

define a method outside of the class called linear_search
this method has 2 arguments, the student array and name
return the index from the array of the student
=end

# 3. Initial Solution

class Student
  attr_accessor :scores, :first_name

  def initialize(first_name, scores)
  	@first_name = first_name
    @scores = scores
  end

  def inspect
  	@first_name
  end

  def average
  	sum = 0
    @scores.each do |x|
      sum += x
    end
    avg = sum / @scores.length
    return avg
  end

  def letter_grade
  	if average >= 90
  		"A"
  	elsif average >= 80
  		"B"
  	elsif average >= 70
  		"C"
  	elsif average >= 60
  		"D"
  	else
  		"F"
  	end
  end 
end

def linear_search(array, student)
	array.each do |x|
  	if x.first_name == student
  		return array.index(x)
  	else
  		return -1
  	end
  end
end

students = []
students[0] = Student.new("Alex", [100, 100, 100, 0, 100])
students[1] = Student.new("Matt", [1, 2, 3, 4, 5])
students[2] = Student.new("Jeff", [1, 2, 3, 4, 5])
students[3] = Student.new("Brian", [1, 2, 3, 4, 5])
students[4] = Student.new("Tim", [1, 2, 3, 4, 5])

# 4. Refactored Solution
def binary_search(array, target, lower = 0, upper = array.length)
	while upper >= lower
		mid = (upper + lower) / 2
		if self[mid] < element
			lower = mid - 1
		elsif 






# 1. DRIVER TESTS GO BELOW THIS LINE
# Tests for release 0:

p students[0].first_name == "Alex"
p students[0].scores.length == 5
p students[0].scores[0] == students[0].scores[4]
p students[0].scores[3] == 0


# Tests for release 1:

p students[0].average == 80
p students[0].letter_grade == 'B'

# Tests for release 2:

p linear_search(students, "Alex") == 0
p linear_search(students, "NOT A STUDENT") == -1





# 5. Reflection 
=begin 
This challenge was not that hard to pass all of the tests, but 
I feel like I did not do it correctly. First off, why does this 
code have attr_accessor? I understand what it does, but It does 
not read or write code in any way. Second, I'm not sure
if I was suppoosed to design the program to automatically add the 
student into a list, but I did not know how to refer to the created
student object, so I just created an array out of the class. 
Maybe the attr_accessor is a clue to needing attributes somehow.
=end