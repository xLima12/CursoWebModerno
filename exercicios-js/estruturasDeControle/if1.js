function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Parabéns! Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo('Willian é calvo por opção!')