function romanCalculator(operation) {

    let [firstOperand, operator, secondOperand] = operation.split(' ') 

    firstOperand = +firstOperand
    secondOperand = +secondOperand
    console.log(typeof firstOperand)
    console.log(operator)
    console.log(secondOperand)

    switch(operator) {
        case '+': 
        return firstOperand + secondOperand;
        case '-': 
        return firstOperand - secondOperand;
        case '*': 
        return firstOperand * secondOperand;
        case '/': 
        return firstOperand / secondOperand;
    }
}

console.log(romanCalculator('I + 5'))

