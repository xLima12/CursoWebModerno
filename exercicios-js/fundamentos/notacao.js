console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'

//obj['nome'] = 'Bola2'

console.log(obj1)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2)
console.log(obj3)
obj3.exec()