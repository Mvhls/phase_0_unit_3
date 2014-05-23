// U3.W8-9: Gradebook from Names and Scores

// I worked on this challenge [by myself, with: Colin Trent]

// These are the votes cast by each student. Do not alter these objects here.
var votes = {
  "Alex": { president: "Bob", vicePresident: "Devin", secretary: "Gail", treasurer: "Kerry" },
  "Bob": { president: "Mary", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Cindy": { president: "Cindy", vicePresident: "Hermann", secretary: "Bob", treasurer: "Bob" },
  "Devin": { president: "Louise", vicePresident: "John", secretary: "Bob", treasurer: "Fred" },
  "Ernest": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Fred": { president: "Louise", vicePresident: "Alex", secretary: "Ivy", treasurer: "Ivy" },
  "Gail": { president: "Fred", vicePresident: "Alex", secretary: "Ivy", treasurer: "Bob" },
  "Hermann": { president: "Ivy", vicePresident: "Kerry", secretary: "Fred", treasurer: "Ivy" },
  "Ivy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Gail" },
  "John": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Kerry" },
  "Kerry": { president: "Fred", vicePresident: "Mary", secretary: "Fred", treasurer: "Ivy" },
  "Louise": { president: "Nate", vicePresident: "Alex", secretary: "Mary", treasurer: "Ivy" },
  "Mary": { president: "Louise", vicePresident: "Oscar", secretary: "Nate", treasurer: "Ivy" },
  "Nate": { president: "Oscar", vicePresident: "Hermann", secretary: "Fred", treasurer: "Tracy" },
  "Oscar": { president: "Paulina", vicePresident: "Nate", secretary: "Fred", treasurer: "Ivy" },
  "Paulina": { president: "Louise", vicePresident: "Bob", secretary: "Devin", treasurer: "Ivy" },
  "Quintin": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Bob" },
  "Romanda": { president: "Louise", vicePresident: "Steve", secretary: "Fred", treasurer: "Ivy" },
  "Steve": { president: "Tracy", vicePresident: "Kerry", secretary: "Oscar", treasurer: "Xavier" },
  "Tracy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Ullyses": { president: "Louise", vicePresident: "Hermann", secretary: "Ivy", treasurer: "Bob" },
  "Valorie": { president: "Wesley", vicePresident: "Bob", secretary: "Alex", treasurer: "Ivy" },
  "Wesley": { president: "Bob", vicePresident: "Yvonne", secretary: "Valorie", treasurer: "Ivy" },
  "Xavier": { president: "Steve", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Yvonne": { president: "Bob", vicePresident: "Zane", secretary: "Fred", treasurer: "Hermann" },
  "Zane": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Mary" }
}

// Tally the votes in voteCount.
var voteCount = {
  president: {},
  vicePresident: {},
  secretary: {},
  treasurer: {}
}

/* The name of each student receiving a vote for an office should become a property 
of the respective office in voteCount.  After Alex's votes have been tallied, 
voteCount would be ...

  var voteCount = {
    president: { Bob: 1 },
    vicePresident: { Devin: 1 },
    secretary: { Gail: 1 },
    treasurer: { Kerry: 1 }
  }

*/


/* Once the votes have been tallied, assign each officer position the name of the 
student who received the most votes. */
var officers = {
  president: undefined,
  vicePresident: undefined,
  secretary: undefined,
  treasurer: undefined
}

// Pseudocode
/*
create a function tallyVote
iterate over each person inside votes hash
iterate over each vote for each person
push the data into the vote count hash

for each office find the key with the largest value
set that equal to each hash in the officers variable



*/


// __________________________________________
// Initial Solution
/*
for (var voter in votes){
  var obj = votes[voter];
  if (!voteCount.president[obj.president]){
    voteCount.president[obj.president] = 1;
  } else{ 
    voteCount.president[obj.president] += 1;
  }
  if (!voteCount.vicePresident[obj.vicePresident]){
    voteCount.vicePresident[obj.vicePresident] = 1;
  } else{ 
    voteCount.vicePresident[obj.vicePresident] += 1;
  }
  if (!voteCount.secretary[obj.secretary]){
    voteCount.secretary[obj.secretary] = 1;
  } else{ 
    voteCount.secretary[obj.secretary] += 1;
  }
  if (!voteCount.treasurer[obj.treasurer]){
    voteCount.treasurer[obj.treasurer] = 1;
  } else{ 
    voteCount.treasurer[obj.treasurer] += 1;
  }
}



for (var office in voteCount ) {
  winner = 0;
  for (var candidate in voteCount[office]){
    if (voteCount[office][candidate] > winner) {
        winner = voteCount[office][candidate];
        officers[office] = candidate;
    }   
  }
}
*/
// __________________________________________
// Refactored Solution

/*
for (var voter in votes) {
  for (var position in votes[voter]) {
    obj = votes[voter][position];
    if (!voteCount[position][obj]) {
      voteCount[position][obj] = 1
    }
    else {
      voteCount[position][obj] += 1
    }
  }
}
*/

for (var voter in votes){
  var obj = votes[voter];
  for (var position in obj){
    var person = obj[position];
    if (!voteCount[position][person]){
      voteCount[position][person] = 1;
    } else{
      voteCount[position][person] += 1;
    }
  }
}

for (var office in voteCount ) {
  winner = 0;
  for (var candidate in voteCount[office]){
    if (voteCount[office][candidate] > winner) {
        winner = voteCount[office][candidate];
        officers[office] = candidate;
    }   
  }
}






// __________________________________________
// Reflection
/*
This was a tough challenge! Working with Colin, we were 
able to complete the first 4 assertions within 45 minutes. I 
thought the second part of the exercise was going to be easy, 
but it took the longest! We knew we had to take the largest 
number out of the hash we made, but didn't know how. I feel it 
took so long because I was not familiar with the javascript 
syntax. We were both saying how easy this problem would have 
been in ruby! After extensive research, we were able to come up
with a solution involving two different for loops and an if/else 
statement. After that, we were able to refactor the code from the
first part using what we had learned from solving the second.
*/





// __________________________________________
// Driver Code:  Do not alter code below this line.


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (voteCount.president["Bob"] === 3),
  "Bob should receive three votes for President.",
  "1. "
)

assert(
  (voteCount.vicePresident["Bob"] === 2),
  "Bob should receive two votes for Vice President.",
  "2. "
)

assert(
  (voteCount.secretary["Bob"] === 2),
  "Bob should receive two votes for Secretary.",
  "3. "
)

assert(
  (voteCount.treasurer["Bob"] === 4),
  "Bob should receive four votes for Treasurer.",
  "4. "
)

assert(
  (officers.president === "Louise"),
  "Louise should be elected President.",
  "5. "
)

assert(
  (officers.vicePresident === "Hermann"),
  "Hermann should be elected Vice President.",
  "6. "
)

assert(
  (officers.secretary === "Fred"),
  "Fred should be elected Secretary.",
  "7. "
)

assert(
  (officers.treasurer === "Ivy"),
  "Ivy should be elected Treasurer.",
  "8. "
)