function dinheiro(a){

    valor = a.toFixed(2)

    return console.log(`O seu saldo é R$ ${valor.toString().replace('.', ',')}`)

}

dinheiro(0.3)