function calculadora(a, b, c) {

    switch (b) {
        case '+': console.log(`A soma dos valores ${a} + ${c} = ${a + c}`)
        break
        case '-': console.log(`A substração dos valores ${a} - ${c} = ${a - c}`)
        break
        case '*': console.log(`A multiplicação dos valores ${a} x ${c} = ${a * c}`)
        break
        case '/': console.log(`A divisão dos valores ${a} / ${c} = ${a / c}`)
        break
        default: 'Passe um calculo válido de soma, subtração, multiplicação ou divisão!'
    }

}

calculadora(1, '*', 2)