const prompt = require('prompt-sync')({ sigint: true})
const numero1 = Number(prompt("Digite el primer numero: "))
const numero2 = Number(prompt("Digite el segundo numero: "))
const operacion = prompt("Digite la operacion: ")

switch(operacion) {
    case '+':
        console.log(`${numero1} ${operacion} ${numero2} = ${numero1 + numero2}`)
        break
    case '-':
        console.log(`${numero1} ${operacion} ${numero2} = ${numero1 - numero2}`)
        break
    case '*':
        console.log(`${numero1} ${operacion} ${numero2} = ${numero1 * numero2}`)
        break
    case '/':
        console.log(`${numero1} ${operacion} ${numero2} = ${numero1 / numero2}`)
        break
}
