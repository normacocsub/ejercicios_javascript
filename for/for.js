const prompt = require('prompt-sync')({ sigint: true})

let listaNumeros = [ 3, 2, 5, 4 ] 
const objeto = {
    id: '5',
    nombre: 'Fernando',
    edad: 30
}

// for (let index = 0; index <= (listaNumeros.length - 1); index++) {
//     console.log(listaNumeros[index])
// }

// for (const key in objeto) {
//     console.log(key)
// }

// for (const iterator of listaNumeros) {
//     console.log(iterator)
// }

listaNumeros.forEach((element, index, lista) => {
    console.log(element, index, lista)
    
});
