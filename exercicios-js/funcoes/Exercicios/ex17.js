function planoCarreira(plano, salarioAtual){
    switch(plano){
        case 'A': console.log(`Seu novo salário será: ${salarioAtual = salarioAtual + (salarioAtual * 0.10)}`)
        break
        case 'B': console.log(`Seu novo salário será: ${salarioAtual = salarioAtual + (salarioAtual * 0.15)}`)
        break
        case 'C': console.log(`Seu novo salário será: ${salarioAtual = salarioAtual + (salarioAtual * 0.20)}`)
        break
        default: console.log('Escolha um plano válido!!!')
    }
}

planoCarreira('C', 15000)