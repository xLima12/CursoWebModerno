//Forma antiga de usar exponenciação usando Math.pow()
const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2);

console.log(area);
console.log(typeof Math);
console.log(typeof area);

//exponênciação nova forma de usar do ES7

let exp = 2 ** 3
console.log(exp)

let base = 2
base **= 3
console.log(base)