function valorPlano(idade) {

    let valorPlano = 100

    if (idade < 10) {
        console.log(`A idade informada tem um custo de R$ ${valorPlano + 80}`)
    } else if (idade < 30){
        console.log(`A idade informada tem um custo de R$ ${valorPlano + 50}`)
    } else if (idade < 60){
        console.log(`A idade informada tem um custo de R$ ${valorPlano + 95}`)
    } else {
        console.log(`A idade informada tem um custo de R$ ${valorPlano + 130}`)
    }

}

valorPlano(300)