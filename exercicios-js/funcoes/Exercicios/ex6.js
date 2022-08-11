function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    const calcJurosSimples = (capitalInicial * taxaJuros) * tempoAplicacao
    const valorFinalCalc = calcJurosSimples + capitalInicial
    return console.log(`O valor da aplicação será ${valorFinalCalc}`)
}

jurosSimples(1200, 0.02, 14)

function jurosComposto(capitalInicial, taxaJuros, tempoAplicacao) {

const calcJurosComposto = capitalInicial * (1 + taxaJuros) ** tempoAplicacao

console.log(calcJurosComposto.toFixed(2))

}

jurosComposto(1000, 0.04, 14)