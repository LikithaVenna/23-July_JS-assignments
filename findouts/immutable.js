// Immutable object (unchangeable object) is an object whose state cannot be modified after it is created.
'use strict'

console.log('----Using Freeze-----')
 const book = Object.freeze({
  title : "How JavaScript Works",
  author : "Douglas Crockford"
});
// book.title = "Other title";
console.log(book)

console.log('----Using deepFreeze-----')
function deepFreeze(object) {
   Object.keys(object).forEach(function freezeNestedObjects(name){
   const value = object[name];
    if(typeof value === "object") {
     deepFreeze(value);
    }
  });
  return Object.freeze(object);
}

console.log('----Using map-----')

const book2 = Map({
  title: "JavaScript The Good Parts",
  author: "Douglas Crockford"
});
const title = "How JavaScript Works"
const newBook = book.set("title", title);
console.log(newBook.toObject())
 