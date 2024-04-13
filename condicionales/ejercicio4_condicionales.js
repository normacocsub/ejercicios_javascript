const prompt = require('prompt-sync')({ sigint: true})
const lado1 = Number(prompt("Digite el primer lado: "))
const lado2 = Number(prompt("Digite el segundo lado: "))
const lado3 = Number(prompt("Digite el tercer lado: "))

if (lado1 === lado2 && lado1 === lado3) {
    console.log("Es un triangulo equilatero.")
}
else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("Es un triangulo isosceles.")
}
else {
    console.log("Es un triangulo escaleno. ")
}