//Laço de repetição for
 const funcs = []

//Função do professor
 for(var i = 0; i < 10; i++){
    funcs.push(function () {
        console.log(i)
    })
 }

 funcs [2]()
 funcs [8]()

 console.log('==================')
 
//Minha função
 for(var i = 0; i < 10; i++){
    funcs.push(() => {
        console.log(i)
    })
 }

 funcs [2]()
 funcs [8]()