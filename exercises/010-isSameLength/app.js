// Write your function here

const isSameLength = (word1, word2) => {
    if (word1.length === word2.length) {
        return true
    }
    else {
        return false
    }
}

let output = isSameLength('words', 'super');
console.log(output);