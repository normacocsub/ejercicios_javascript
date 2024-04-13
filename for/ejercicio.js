const lista = [60, 8, 21, 45, 32, 10]

let numero = 0

for (const iterator of lista) {
    if (iterator > numero) {
        numero = iterator
    }
}

console.log(numero)



