function anoBissexto(ano) {

    if(ano <= 0){
        console.log(`O ano ${ano} não é bissexto`)
    }
    else if (ano % 400 == 0) {
        console.log(`O ano ${ano} é bissexto`)
    } else if (ano % 100 == 0) {
        console.log(`O ano ${ano} não é bissexto`)
    } else if (ano % 4 == 0) {
        console.log(`O ano ${ano} é bissexto`)
    } else {
        console.log(`O ano ${ano} não é bissexto`)
    }

}

anoBissexto(4)

function calcularAnoBissexto(ano) {
    if (ano <= 0) {
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(calcularAnoBissexto(5004))