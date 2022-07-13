let n = 6

function staircase(n) {
    let stairs = ''
    
    for (let i = 0; i < n; i++) {
      stairs += "#"
      let stairsResult = stairs.padStart(n)
      console.log(stairsResult)
    }
   }
   staircase(n)