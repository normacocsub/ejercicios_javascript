let menu = ['Registrar', 'Consultar', 'Eliminar']

console.log(menu)
menu[2] = 'Actualizar'
menu.push('Eliminar')
console.log(menu)

// Registrar, Consultar, Actualizar, Eliminar
const cadena = menu.slice(1, 3)
menu.splice(1, 3)
menu.pop()

console.log(menu, cadena)