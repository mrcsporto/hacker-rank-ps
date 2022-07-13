let arrayA = [5, 6, 7]
let arrayB = [3, 6, 10]

let arrayC = [17, 28, 30]
let arrayD = [99, 16, 8]

let points = []

function compareTriplets(a, b) {
    let points = [0, 0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            points[0]++;
        } else if (a[i] < b[i]) {
            points[1]++;
        }
    }
    console.log(points)
    return points
}

compareTriplets(arrayA,arrayB)
compareTriplets(arrayC,arrayD)




