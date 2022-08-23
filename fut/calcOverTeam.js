function getOverRandom(over) {

    let calcOver = 0
    let average = 0

    function calc() {
        for (let count = 1; average <= over; count++) {
            let randomOver = Math.random() * (89 - 75 + 1) + 75
            if (average != over) {
                average += (calcOver + randomOver) / 11
                if(average > over){
                    break
                } else {
                    console.log(`Jogador ${count}, Overall ${Math.floor(randomOver)}, Overall Team ${Math.floor(average)}`)
                }
            }
        }
    }

    return calc()
}

getOverRandom(85)