// U3.W8-9: Challenge you're converting


// I worked on this challenge [by myself, with: ].

// 2. Pseudocode
/*
create a function called separate comma with argument x
create a variable called number
set variable equal to:
	the number converted to a string
	the string split into an array

if number length is less than 4
	return the number joined into one string

if number length is less than 7
	insert a comma in the correct position

if number length is less than 10
	insert two commas in the correct positions
*/


// 3. Initial Solution
function separateComma(x) {
	var number = x.toString().split("");
	if (number.length < 4) {
		return number.join("");
	}
	else if (number.length < 7 ) {
		number.splice(number.length-3, 0, ",");
		return number.join("");
		
	}
	else if (number.length < 10) {
		number.splice(number.length-6, 0, ",");
		number.splice(number.length-3, 0, ",");
		return number.join("");
	}
}



// 4. Refactored Solution

// I could not find a way to refactor this solution.


// 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE
console.log(separateComma(123) == "123")
console.log(separateComma(1234) == "1,234")
console.log(separateComma(1234567) == "1,234,567")




// 5. Reflection 

/*
I loved working on the separate_by_commas challenge, and it 
uses a lot of functions that I would like to understand in 
javascript, so I thought I would learn to do it in js!
a lot of the methods and functions are very similar, like 
join and split. Others like to_s and insert were different.
The challenge was just learning the different syntax and 
looking up the new functions, and was quite enjoyable!
*/