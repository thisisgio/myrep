function calculation() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var Symbol = document.getElementById('symbol').value;
    var result;

    switch(Symbol) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : '∞';
            break;
        default:
            result = 'Invalid operator';
    }

    document.getElementById('result').innerText = 'Result: ' + result;
}