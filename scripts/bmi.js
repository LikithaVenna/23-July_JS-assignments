'use strict'
 let jeff
 let todd
 function calculateBmi(mass,height)
 {
     var res=(mass)/(height**2)
     return res
 }
 jeff = calculateBmi(5000,15)
 console.log(`BMI of jeff is ${jeff}`)