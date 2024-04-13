const prompt = require('prompt-sync')({ sigint: true})
const calificacion = prompt("Digite la calificacion: ")

switch(calificacion.toUpperCase()) {
    case 'A':
        console.log("Excelente trabajo. ")
        break
    case 'B':
        console.log("Buen trabajo. ")
        break
    case 'C':
        console.log("Aprobaste por poco. ")
        break
    case 'D':
        console.log("Debes mejorar. ")
        break
    case 'F':
        console.log("Nota muy baja, estudiar mas.")
        break
    default:
        console.log("No es una calificacion valida. ")
}
