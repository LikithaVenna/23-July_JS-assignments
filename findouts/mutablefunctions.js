// Mutable is a type of variable that can be changed. 
// In JavaScript, only objects and arrays are mutable, not primitive values.
'use strict'

var immutableString = "Hello";

// In the above code, a new object with string value is created.

immutableString = immutableString + "World";

// We are now appending "World" to the existing value.
console.log(immutableString)