const display = document.getElementById("display");
let input = '';

function addNumber(num){
    input += num;
    display.value = input;
}

function addOperator(op){
    if (input === '' && op !== '-') {
       return ;
    }

    const lastChar = input[input.length - 1];
            if ('+-*/%'.includes(lastChar)) {
                input = input.slice(0, -1) + op; // Replace last operator
            } 
            else {
                input += op;
            }
            display.value = input;
}

const parts = input.split(/[+\-*/%]/);
            const currentNum = parts[parts.length - 1];
             if (!currentNum.includes('.')) {
                input += '.';
                display.value = input;
            }
        

function clearDisplay(){
    input = "";
    display.value = input ;
  }

  function calculate(){
    display.value = eval(display.value);
  }

  display.value = "";



