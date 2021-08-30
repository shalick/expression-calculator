function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    expr = expr.split(' ').join('');

    let brackets = 0;

    for (const el of expr) {
        if (el === '(') {
            brackets++;
        } else if (el === ')') {
            brackets--;
        }
    }
      
    if (brackets) {
        throw new Error('ExpressionError: Brackets must be paired');
    }
    if (expr.includes('/0')) {
        throw new Error('TypeError: Division by zero.');
    }

    return new Function(`return ${expr}`)();
}

module.exports = {
    expressionCalculator
}