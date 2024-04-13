const operacion = (calcular, numero1, numero2) => {
    return calcular(numero1, numero2)
}

const suma = (numero1, numero2) => {
    return numero1 + numero2
}

const resta = (numero1, numero2) => {
    return numero1 - numero2
}

var resultadoSuma = operacion(suma, 5, 5 )
var resultadoResta = operacion(resta, 5, 5 )

console.log(resultadoSuma)
console.log(resultadoResta)