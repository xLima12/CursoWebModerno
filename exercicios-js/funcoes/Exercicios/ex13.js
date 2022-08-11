function diaUtil(dia) {

    switch (dia) {
        case 'Domingo':
            console.log(`${dia} não é um dia util`)
            break
        case 'Segunda':
            console.log(`${dia} - feira é um dia util`)
            break
        case 'Terça':
            console.log(`${dia} - feira é um dia util`)
            break
        case 'Quarta':
            console.log(`${dia} - feira é um dia util`)
            break
        case 'Quinta':
            console.log(`${dia} - feira é um dia util`)
            break
        case 'Sexta':
            console.log(`${dia} - feira é um dia util`)
            break
        case 'Sabado':
            console.log(`${dia} não é um dia util`)
            break
        default: console.log('Não é um dia da semana')
    }
}

diaUtil('Domingo')
diaUtil('Segunda')
diaUtil('Terça')
diaUtil('Quarta')
diaUtil('Quinta')
diaUtil('Sexta')
diaUtil('Sabado')