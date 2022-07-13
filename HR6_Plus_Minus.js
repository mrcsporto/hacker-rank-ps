let newArray = [-4,3,-9,0,4,1]
let fixedPositive = 0
let fixedNegative = 0
let fixedZero = 0

function plusMinus(arr) {
    let positiveResult = 0
    let negativeResult = 0
    let zeroResult = 0
   
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
            positiveResult++
            fixedPositive = (positiveResult / arr.length).toFixed(6)
        }
        else if(arr[i] < 0){
            negativeResult++
            fixedNegative = (negativeResult / arr.length).toFixed(6)
        }
        else if(arr[i] == 0){
            zeroResult++
            fixedZero = (zeroResult / arr.length).toFixed(6)
        }
    }
    console.log(fixedPositive)
    console.log(fixedNegative)
    console.log(fixedZero)
} 
plusMinus(arr)
