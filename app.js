const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')

let calculation = []
let accumulateCalculation

function calculate (button) {
    const value = button.textContent
    if (value === "CLEAR") {
       calculation = []
        screenDisplay.textContent = '.'
    } else if(value === "=") {
        console.log(accumulateCalculation)
        screenDisplay.textContent = eval(accumulateCalculation)
    } else {
        calculation.push(value)
    accumulateCalculation = calculation.join('')
    screenDisplay.textContent = accumulateCalculation
    }


}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))