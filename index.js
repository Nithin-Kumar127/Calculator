const display = document.getElementById("display");
        let input = '';

        function addNumber(num) {
            input += num;
            display.value = input;
        }

        function addOperator(op) {
            if (input === '' && op !== '-') {
                return;
            }

            const lastChar = input[input.length - 1];
            if ('+-*/%'.includes(lastChar)) {
                input = input.slice(0, -1) + op; 
            } else {
                input += op;
            }
            display.value = input;
        }

        function addDecimal() {
          
            const parts = input.split(/[+\-*/%]/);
            const currentNum = parts[parts.length - 1];
            
          
            if (!currentNum.includes('.')) {
                input += '.';
                display.value = input;
            }
        }

        function toggleSign() {
            if (!input) return;
            
            if (input.startsWith('-')) {
                input = input.substring(1);
            } else {
                input = '-' + input;
            }
            display.value = input;
        }

        function clearDisplay() {
            input = "";
            display.value = "";
        }

        function calculate() {
            try {
              
                let expression = input.replace(/%/g, '/100');
                let result = eval(expression);
                input = result.toString();
                display.value = input;
            } catch (error) {
                display.value = "Error";
                input = "";
            }
        }

      display.value = "";