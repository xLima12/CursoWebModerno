Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i =0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    if (p.preco > 500 && p.fragil === true){
        return p
    }
}))

console.log(produtos.filter(function(p){
    return p.fragil === true && p.preco > 500
}))

const precoCaro = e => e.preco > 500
const prodFragil = e => e.fragil

console.log(produtos.filter2(precoCaro).filter2(prodFragil))