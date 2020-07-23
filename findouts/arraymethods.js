'Use strict'
let names=['Likki','Jai','Tush','Aish']
console.log(names)  //displys names in console

console.log(names[3]) //access an item using index position

let newItem = names.push('Hema')    //Add an item to the end of an Array
console.log(names)

let removeItem = names.pop()    //Remove an item from the end of an Array
console.log(names)  

let firstRemove = names.shift() //Remove an item from the beginning of an Array
console.log(names) 

let addBeginning = names.unshift('Raj') //Add an item to the beginning of an Array
console.log(names) 

let pos = names.indexOf('Tush') //Find the index of an item in the Array
console.log(pos)

let indexItem = names.splice(pos,4) //Remove an item by index position
console.log(names)

let shallowCopy = names.slice() //Copy an Array
console.log(shallowCopy)

names.push('Likki')
names.push('Tush')
names.push('Aishu')
console.log(names.length)   //length of an array

console.log(Object.keys(names))



