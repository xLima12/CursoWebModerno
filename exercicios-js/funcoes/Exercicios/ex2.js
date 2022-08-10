function triangulo(a, b, c){
    if(a === b && b === c){
        console.log('Este trinagulo é do tipo Equilátero')
    } else if(a === b || a === c ||b === c){
        console.log('Este triangulo é do tipo Isósceles')
    } else {
        console.log('Este triangulo é do tipo Escaleno')
    }
}

triangulo(4, 3, 2)