//Factory com parametros

function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desc: 0.1
    }
}
nome = 'Celular'
preco = 4990.59

console.log(criarProduto('Celular2', 3990.59))

console.log(criarProduto(nome, preco))