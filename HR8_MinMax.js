let arr = [1,2,3,4,5]


function miniMaxSum(arr) {
    let newArray = [0]
    let subArr = []
    let min = 0
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        newArray = arr.splice(i,1,...newArray)
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        subArr.push(sum)
    }
    min = Math.min(...subArr)
    max = Math.max(...subArr)
    console.log(min,max)
}         
miniMaxSum(arr)




