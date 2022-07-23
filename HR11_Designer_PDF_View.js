let h = [1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]
let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let word = 'abc'
let wordPosition =[]
let hPosition = []
let max

function designerPdfViewer(h, word) {
    for (let i = 0; i < word.length; i++) { 
        let result
        result = alpha.indexOf(word[i])
        wordPosition.push(result)
    }
    
    for (let j = 0; j < wordPosition.length; j++) {
        hPosition.push(h[wordPosition[j]])
        max = Math.max(...hPosition)
        max = max * word.length
    }
    return max

} designerPdfViewer(h, word)

