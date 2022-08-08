//Armazenando uma funcão dentro de uma variavel

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando um função arrow em uma variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//Retorno implícito

const subtracao = (a, b) => a - b

console.log(subtracao(10, 5))