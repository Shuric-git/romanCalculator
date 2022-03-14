function romanCalculator(operation) {

    let [firstOperand, operator, secondOperand] = operation.split(' ') 

    const romanDict = ['I', 'II', 'III']
    const romanObj = {
        'I': 1,
        'II': 2,
        'III': 3,
    }
    if ( romanDict.includes(firstOperand)) {
    }
    for ( let i of Object.entries(romanObj)) {
        
    }
    // firstOperand = +firstOperand
    // secondOperand = +secondOperand

    // console.log(romanObj[firstOperand])
    // console.log(romanObj[secondOperand])
    switch(operator) {
        case '+': 
        let sum = romanObj[firstOperand] + romanObj[secondOperand];
        console.log(sum)
        return romanDict[sum - 1]
        case '-': 
        return firstOperand - secondOperand;
        case '*': 
        return firstOperand * secondOperand;
        case '/': 
        return firstOperand / secondOperand;
    }
}

console.log(romanCalculator('I + II'))

