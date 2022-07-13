let matrix = [
    [11,2,4],
    [4,5,6 ],
    [10,8,-12]
]

    function diagonalDifference(arr) {
        let leftD = 0
        let rightD = 0
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                   
                    if (i === j){
                        leftD += arr[i][j]
                    }
                    if (i + j === (arr[i].length-1))
                        rightD += arr[i][j]
                } 
            }
            return Math.abs(leftD - rightD)     
    }
    diagonalDifference(matrix)

  
