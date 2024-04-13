const prompt = require('prompt-sync')({ sigint: true})

const numero = Number(prompt("Digite el numero: "))

if (numero % 2 === 0 & numero % 3 === 0) {
    console.log(`El numero ${numero} es divisible por 2 y por 3`)
}
else if (numero % 2 === 0) {
    console.log(`El numero ${numero} es divisible por 2`)
}
else if (numero % 3 === 0) {
    console.log(`El numero ${numero} es divisible por 3`)
}
else {
    console.log(`El numero ${numero} no es divisible`)
}