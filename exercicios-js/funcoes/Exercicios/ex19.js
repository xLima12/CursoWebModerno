function calcularPedido(codigo, quantidade) {

    switch (codigo) {
        case 100: console.log(`O seu pedido de ${quantidade} Cachorro Quente custará R$ ${quantidade * 3.00}`)
        break
        case 200: console.log(`O seu pedido de ${quantidade} Hambúrguer Simples custará R$ ${quantidade * 4.00}`)
        break
        case 300: console.log(`O seu pedido de ${quantidade} Cheeseburguer custará R$ ${quantidade * 5.50}`)
        break
        case 400: console.log(`O seu pedido de ${quantidade} Bauru custará R$ ${quantidade * 7.50}`)
        break
        case 500: console.log(`O seu pedido de ${quantidade} Refrigerante custará R$ ${quantidade * 3.50}`)
        break
        case 600: console.log(`O seu pedido de ${quantidade} Suco custará R$ ${quantidade * 2.80}`)
        break
        default: console.log('Produto não cadastrado!')
    }

}

calcularPedido(50, 3)

/*Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80*/