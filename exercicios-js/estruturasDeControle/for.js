let contador = 1

while(contador <= 10){
    console.log(`Contador = ${contador}`)
    contador++
}

//Dessa forma imprimo só os números impares
//for(contador; contador <= 50; contador++){
//    console.log(`Contador ${contador}`)
//    contador++
//}

for(contador; contador <= 50; contador++){
    console.log(`Contador ${contador}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++){
    console.log(`nota = ${notas[i]}`)
}