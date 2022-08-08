//hoisting (efeito de içamento)

console.log('a =', a)
var a = 2
console.log('a =', a)

function teste() {
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}

//Com let não tem efeito de içamento
//console.log('b =', b)
//let b = 2 
//console.log('b =', b)