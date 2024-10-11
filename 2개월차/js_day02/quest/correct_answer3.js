function calculate(x, y, symbol){
    let answer = 0;
    switch(symbol){
        case '+':
            answer = x + y;
            break;
        case '-':
            answer = x - y;
            break;
        case '*':
            answer = x * y;
            break;
        case '/':
            answer = x / y;
            break;
    }
    return answer;
}
console.log(calculate(34, 50, '+'));
console.log(calculate(10, 20, '-'));
console.log(calculate(50, 50, '*'));
console.log(calculate(100, 5, '/'));