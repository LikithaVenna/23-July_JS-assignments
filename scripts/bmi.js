'use strict'
 let jeff
 let todd
 function calculateBmi(mass,height)
 {
     var res=(mass)/(height**2)
     return res
 }
 jeff = calculateBmi(70,1.9)
 console.log(`BMI of jeff is ${jeff}`)
 todd = calculateBmi(65,1.7)
 console.log(`BMI of todd is ${todd}`)

 // Comparing their BMI

 let isHigh = (jeff > todd) ? "true" : "false"
 
 // Display who has highest BMI

 console.log(`It is ${isHigh} that jeff has high BMI than todd`)