class Calculator
{
    constructor(previousOperandTextElement , currentOperandTextElement ){
        this. previousoperandTextElement =  previousoperandTextElement
        this.  currentoperandTextElement =  currentoperandTextElement 
    this.clear()
    }
    clear(){
this.currentOperand = " "
this.previousOperand = " "
this.operation = undefined
    }

    delate(){
this.currentOperand = this.currentOperand.tostring().slice(0, -1)
    }

    appendNumber(number){
        if (number === ',' && this.currentOperand.includes('.')) return
this.currentOperand = this.currentOperand.toString() +number.toString()
    }
    chooseOpeartion(operation)
{
if (this.currentOperand === '' ) return
if (this.previousOperand !== '' ){
    this.compute()
}
this.operation=operation
this.prevoiusOperand = this.currentOperand
this.currentOperand ='' 

}
compute(){
let computation
const prev = praseFloat(this.previousOperand)
const current = praseFloat(this.currentOperand)
if (isNaN(prev) || isNaN(current)) return
switch (this.operation){
case '+':
    computation = prev + current
    break
case '-':
    computation = prev - current
    break
case '*':
    computation = prev * current
    break
case '÷':
    computation = prev / current
    break
    default:
    return
}
this.currentOperand = computation
this.operation = undefined
this.previousOperand = ''
}
getDisplay(number){
    const stringNumber = number.toString()
    const integerDigits = praseFloat(stringNumber.split('.'[0]))
      const decimalDigits = stringNumber.split('.'[1])
       let integerDisplay
   if (isNaN(integerDigits)){
    integerDisplay = ''
   } else{
integrDisplay = integerDigits.toLocalString('en',{
    maximunFractionDigits:0
})
   }
   if(decimalDigits!= null){
    return '${integerDisplay}.${decimalDigits}'
    else {
        return inteerDisplay
    }
   }
    
}
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.getDisplaynumber(this.currentOperand)  
 if (this.operation != null) {
this.previousOperandTextElement.innerText = this.previousOperand
   ' ${this.previousOperand}  ${this.operation}'
} else {
    this.previousOperandTextElement.innerText = ''
}
    }
}
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButtons = document.querySelector('[data-equals]');
const delateButtons = document.querySelector('[data-delates]');
const allclearButtons = document.querySelector('[data-allclear]');
const previousoperandTextElementButtons = document.querySelector('[data-previous-operandTextElement]');
const currentoperandTextElementButtons = document.querySelector('[data-current-operandTextElement]');
const calculator = new calculator(previousoperandTextElement,currentoperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendnumber(button.innerText)
        calculator.updateDisplay()
    })
})
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})
equalsButton.addEventlistner('click' , button => {
    calculator.compute()
    calculator.updateDisplay()
})
allclearButton.addEventlistner('click' , button => {
    calculator.clear()
    calculator.updateDisplay()
    })
    deleteButton.addEventlistner('click' , button => {
    calculator.delete()
    calculator.updateDisplay()
    })
