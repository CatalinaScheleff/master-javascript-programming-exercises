function isOldEnoughToDrink(age) {
    // your code here
    let result = ""
    if (age < 21) {
        result = false
    }
    else {
        result = true
    }
    return result
    
}

let output = isOldEnoughToDrink(22);
console.log(output);


