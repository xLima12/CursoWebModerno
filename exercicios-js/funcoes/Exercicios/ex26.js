function contarAté100(){

    let numPar = 0
    for (i = 1; i <= 100; i++){
        
        if (i % 2 === 0){
            numPar++
            console.log(i)
        }
        
    }
    console.log(`Total de numeros pares encontrados até 100 é de ${numPar}`)
}

contarAté100()