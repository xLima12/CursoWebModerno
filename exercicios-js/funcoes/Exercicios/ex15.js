function comprarCarro(carro) {

    switch (carro) {
        case 'hatch': console.log('Compra efetuada com sucesso!')
        break
        case 'sedã': console.log('Tem certeza que não prefere este modelo?')
        break
        case 'moto': console.log('Tem certeza que não prefere este modelo?')
        break
        case 'caminhão': console.log('Tem certeza que não prefere este modelo?')
        break
        default: console.log('Não trabalhamos com este tipo de automóvel aqui')
    }

}

comprarCarro('caminhã')