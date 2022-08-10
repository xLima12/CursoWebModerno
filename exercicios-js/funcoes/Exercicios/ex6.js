function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao){
    const calcJurosSimples = (capitalInicial * taxaJuros) * tempoAplicacao
    const valorFinalCalc = calcJurosSimples + capitalInicial
    return console.log(`O valor da aplicação será ${valorFinalCalc}`)
}

jurosSimples(18000, 0.06, 3)

function jurosComposto(capitalInicial, taxaJuros, tempoAplicacao){

}