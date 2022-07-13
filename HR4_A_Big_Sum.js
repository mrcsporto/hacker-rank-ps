let newArray = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

function aVeryBigSum(ar) {
    let sumArray = 0
    for (let i = 0; i < ar.length; i++) {
        sumArray += ar[i]
    }
    return sumArray
}

aVeryBigSum(newArray)
