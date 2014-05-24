# U3.W8-9: 


# I worked on this challenge [by myself, with: ].

# 2. Pseudocode
=begin 
define a method called super_fizzbuzz
 has one argument called array
 loop through each index in array
 if the number in array is divisible by 3 and 5
 	replace number with fizzbuzz
 if number is divisible by 3
 	replace number with fizz
 if number is divisible by 5
 	replace number with buzz
 return array
=end


# 3. Initial Solution

def super_fizzbuzz(array)
  (0...array.length).each do |x|
    if array[x]%3 == 0 && array[x]%5 == 0
      array.delete(array[x])
      array.insert(x, "FizzBuzz")
    elsif array[x]%5 == 0
      array.delete(array[x])
      array.insert(x, "Buzz")
    elsif array[x]%3 == 0
      array.delete(array[x])
      array.insert(x, "Fizz")
    end
  end
  array
end



# 4. Refactored Solution






# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE
# puts super_fizzbuzz([1, 2, 3, 4, 5, 15, "whoops!"]) == [1, 2, "Fizz", 4, "Buzz", "FizzBuzz", "whoops!"]



# 5. Reflection
=begin 
This challenge was familiar for some reason. I believe that I 
have done something similar before. Either way, this challenge 
was pretty straight foward. I first used .each to iterate through 
the array, but was having problems inserting fizz or buzz into the 
correct spot because I couldn't find the index, or it was too 
complicated. I decided to use .each to iterate through the index 
numbers. Once I figure out how to iterate through the actual array, 
I will refactor my solution.
=end



