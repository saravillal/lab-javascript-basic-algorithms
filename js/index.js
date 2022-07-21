// Iteration 1: Names and Input

console.log("I'm ready!");


let hacker1 = 'Adrian';
console.log (`The driver name is ${hacker1}`);

let hacker2 = "David";
console.log (`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

console.log (hacker1.length);
console.log (hacker2.length);

const hacker1Length = 6;
const hacker2Length = 5;

if (hacker1Length > hacker2Length) {
  console.log (`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1Length < hacker2Length)
  { 
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
                 }

// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

const arrayhacker = hacker1.split("");
console.log(arrayhacker);

const upper = arrayhacker.map(element => {
  return element.toUpperCase();
});

console.log (upper);

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"


function reverseString() {

  let newString = "";
  for (let i = arrayhacker.length - 1; i >= 0; i--) {
      newString += arrayhacker[i];
  }
  return newString;
}

const string = prompt('Name:');

const result = reverseString(string);
console.log(result);ole.log(arrayhacker[i]);



//3.3 Depending on the lexicographic order of the strings, print:

/*- The driver's name goes first.
-Yo, the navigator goes first definitely.
- What?! You both have the same name?*/