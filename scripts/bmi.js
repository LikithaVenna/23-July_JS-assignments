'use strict'
 let jeff
 let todd
 function calculateBmi(mass,height)
 {
     let res
     res=(mass)/(height*height)
     return res
 }
 jeff = calculateBmi(5000,15)
 console.log(`BMI of jeff is ${res}`)