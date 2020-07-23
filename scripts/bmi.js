'use strict'
 let jeff
 let todd
 function calculateBmi(mass,height)
 {
     var res=(mass)/(height**2)
     return res
 }
 console.log('-------Calcualted BMI------')
 jeff = calculateBmi(70,1.9)
 console.log(`BMI of jeff is ${jeff}`)
 todd = calculateBmi(65,1.7)
 console.log(`BMI of todd is ${todd}`)

console.log('----------Getting the boolean value-----')

let isHigh = (jeff > todd) ? "true" : "false"

console.log(isHigh)
 
console.log('----------Comparing their BMI------')

 console.log(`It is ${isHigh} that jeff has high BMI than todd`)