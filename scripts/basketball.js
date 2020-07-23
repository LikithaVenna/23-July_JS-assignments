'use strict'
let Heath
let Zane
let score1 
let score2
function score(s1,s2,s3){
    var avg= (s1+s2+s3)/3
    return avg
}
console.log('-----------Display their average scores-----------')
score1= score(89,120,103)
console.log(`Average score of Heath is ${score1}`)
score2 = score(116,94,123)
console.log(`Average score of Heath is ${score2}`)
console.log('---------Display Winner-----------')
function winner(avg1,avg2){
    var res
if(avg1 > avg2){
        res=console.log('Heath is the winner')
    }else{
        res=console.log('Zane is the winner')
}
return res
}
let round1 = winner(score1,score2)
console.log('---------Change their scores-----------')
let score3 = score(100,130,111)
let score4 = score(81,132,123)
let round2 = winner(score3,score4)
console.log('---------Add player Mariah-----------')

let score5 = score(97,134,105)

console.log(`Mariah score is ${score5}`)
if((score5 > score1) && (score5 > score2))
{
    console.log('Mariah is the highest')

}else{
    console.log('Mariah is not highest')
}



