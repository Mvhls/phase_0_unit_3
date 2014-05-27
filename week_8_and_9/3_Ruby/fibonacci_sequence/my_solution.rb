# U3.W8-9: 


# I worked on this challenge [by myself, with: ].

# 2. Pseudocode
# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
# 0, 1, 2, 3, 4, 5, 6, 7
=begin
def fib(x)
  if x == 0
    return 0
  elsif x == 1
    return 1
  elsif x == 2
    return 1
  elsif x > 2
    return fib(x-1) + fib(x-2)
  elsif x != integer
    return "not an integer"
  else
    return "not a positive number"
  end 
end


def fib(n) 
    x, y = 0, 1
    (n).times do
        x, y = y, x + y
    end  
    x
end 
=end


# 3. Initial Solution
def is_fibonacci?(num)
	case_one = Math.sqrt(5 * num**2 + 4)
	case_two = Math.sqrt(5 * num**2 - 4)
	if case_one.is_square == case_one || case_two.round == case_two
		true
	else
		false
	end
end
 puts is_fibonacci?(927372692193078999171)

# 4. Refactored Solution






# 1. DRIVER TESTS GO BELOW THIS LINE
def random_fibonacci
   [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946].sample
end

puts is_fibonacci?(random_fibonacci) == true
puts is_fibonacci?(8670007398507948658051921) == true
puts is_fibonacci?(random_fibonacci+100) == false
puts is_fibonacci?(927372692193078999171) == false





# 5. Reflection 