let menu = ['Registrar', 'Consultar', 'Eliminar']

let menu_filtrado = menu.filter((elemento) => {
    return elemento.toLowerCase() === 'registrar' || elemento.toLowerCase() === 'eliminar'
})

let menu_filtrado2 = menu.filter((elemento) => elemento.toLowerCase() === 'registrar')

let elemento = menu.find((e) => e.toLowerCase() === 'registrar')
let indice = menu.findIndex((e) => e.toLowerCase() === 'registrar')

menu[indice] = 'Registrar Producto'

console.log(elemento, indice, menu)