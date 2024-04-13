const prompt = require('prompt-sync')({ sigint: true})
const palabra = prompt("Digite una palabra: ")


if (palabra.length < 5) {
    console.log(`La palabra ${palabra} es corta`)
}
else if (palabra.length >= 5 && palabra.length <= 10) {
    console.log(`La palabra ${palabra} es mediana`)
}
else {
    console.log(`La palabra ${palabra} es larga`)
}