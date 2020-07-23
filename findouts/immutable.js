// Immutable object (unchangeable object) is an object whose state cannot be modified after it is created.
'use strict'

var person = new ImmutableMap({name: "Chris", age: 32});
var olderPerson = person.set("age", 33);

person.toObject(); 
olderPerson.toObject();
console.log(person)