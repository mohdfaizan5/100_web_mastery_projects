let button = document.querySelector('button')
let resultDisplay = document.querySelector('#result-display')
let expression = '';
let total = '';


function calculate(input) {

  if (input === 'compute') {

    console.log(`expression before evaluating`, expression, 'and')
    total = eval(expression);
    expression = total
    console.log(total)
    resultDisplay.value = total;
  }
  else if(input == 'clear'){
    console.log('clearing one digit')
    expression = expression.slice(0, -1)
    console.log(expression)
    resultDisplay.value = expression
    
  }
  else if(input == 'clearAll'){
    console.log('clearing all')
    expression = '';
    console.log(expression)
    resultDisplay.value = expression

  }

  else {
    
    console.log(input, typeof input)
    input = String(input)
    console.log(input, typeof input)
    
    expression += input;
    console.log(expression)
    resultDisplay.value = expression;
  }

}