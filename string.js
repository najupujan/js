var firstName = "Najup";
var lastName = "Lami";
var firstNameLen = 0;
var firstLetter = "";
var lastCharacter = "";
/*
Escapping character
\'
\"
\\
\n newline
\t newtab
\r carriage return
\b backspace
]f form feed
*/
console.log(firstName + "\n" + lastName); //concatenating string with +
var firstStr = "Java";
var lastStr = "Script";
firstStr += lastStr;
console.log(firstStr);


var ourStr = "hello we are teaching you " + firstStr + " so, please enroll the course ";
console.log(ourStr);


var anAdj = "Awesome!";
var anNep = "Nepali";
anAdj += anNep;
console.log(anNep);


firstNameLen = firstName.length;
console.log(firstNameLen);


firstLetter = firstName[0];
console.log(firstLetter);


/*
String Immutability isn't possible in js
firstName ="kamesh";
firstName[0] = r; --> gives error
firstName = "ramesh"; is write
*/
lastCharacter = firstName[firstName.length - 1];
console.log(lastCharacter);
