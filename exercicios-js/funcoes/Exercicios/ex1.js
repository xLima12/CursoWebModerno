function calc(a, b) {
    
    sum = a + b
    sub = a - b
    mult = a * b
    div = a / b
    res = a % b

    return console.log('A soma dos valores é: ' + sum 
    + ', a subtração dos valores é: ' + sub 
    + ', a multiplicação dos valores é: ' + mult 
    + ', a divisão dos valores é: ' + div 
    + ' e o resto da divisão dos valores é: ' + res)
}

calc(3, 4)