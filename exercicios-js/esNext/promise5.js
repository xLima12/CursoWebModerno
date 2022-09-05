function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.9)
    .then(v => console.log(`Valor: ${v}`))
    .then(v => consol.log(`Valor: ${v}`), err => console.log(`Erro Esp: ${err}`))
    .then(v => console.log('QuaseFim'))
    .catch(err => console.log(`Erro: ${err}`))
    .then(v => console.log('Fim!'))