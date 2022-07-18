let arr = [3, 2, 1, 3]

function birthdayCakeCandles(candles) {
    let max = Math.max(...candles)
    let n = 0

    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === max) {
            n++
        }
    }
    console.log(n)
}
birthdayCakeCandles(arr)