let input = '07:05:45PM'
let newHour = ''
let restHour = ''
let output = ''

function timeConversion(s) {
    changeHour(s)
    changeFormat(s)
    return output
} timeConversion(input)

function changeHour(s){
    newHour = s.substring(0,2)
    restHour = s.substring(2,8)
}

function changeFormat(format) {
    if(format.includes('PM')){
        if (newHour == '12'){
            newHour == '12'
        } else {
            newHour = (+newHour + 12).toString()
        }
    } else {
       if(newHour == '12') {
        newHour = '00'
       } else {
        newHour
       }
    }
    output = newHour + restHour
} 

console.log(output)




