const prompt = require('prompt-sync')({ sigint: true})
const metros = Number(prompt("Digite la distancia en metros: "))
console.log("Opciones: ")
console.log("1. Kilometros")
console.log("2. Centrimetros")
const opcion = Number(prompt("Digite una opcion: "))

var message = ''
if (opcion === 1) {
    message = `${metros / 1000} km`
} else {
    message = `${metros * 100} cm`
}

console.log(`Los metros equivalen a ${message}`)