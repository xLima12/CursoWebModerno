//Par Nome/Valor
const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Falaaaaa' // contexto léxico 2
    return saudacao
}

// Obejtos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    enderco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)