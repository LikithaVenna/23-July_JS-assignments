// Mutable is a type of variable that can be changed. 
// In JavaScript, only objects and arrays are mutable, not primitive values.
'use strict'

console.log('------using push and pop--------')
let empInfo = ['Likitha','Zensar','Pune']
empInfo.push('dotNet Batch')
console.log(empInfo)
console.log(empInfo.pop())


console.log('------shift and unshift---')
let mutatingRemove = ['a', 'b', 'c', 'd', 'e'];
mutatingRemove.shift();
console.log(mutatingRemove)
let mutatingAdd = ['a', 'b', 'c', 'd', 'e']; 
mutatingAdd.push('f'); 
mutatingAdd.unshift('z');
console.log(mutatingAdd)


console.log('------Using splice---')
mutatingRemove.splice(0, 2);
console.log(mutatingRemove)

console.log('------Using filter---')
const arr1 = ['1', '2', '3', '4', '5'];
const arr2 = arr1.filter(a => a !== '5');
console.log(arr2)

console.log('------using reference object--------')
let a = {
    foo: 'bar'
};
let b = a;
b.foo =  'test2'
console.log(b.foo); // test2
console.log(a === b) // true

console.log('------copy items---')
var str1 = 'Hello';
var num1 = 42;
var num2 = num1;
var str2 = str1;
console.log(num2)

console.log('------Update the copies---')
num2 = num2 - 10;
str2 += ' world';
console.log(str2)









