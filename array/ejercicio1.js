const listaLibros = [{
    titulo: 'Aprendiendo',
    autor: 'Fernando',
    genero: 'Cientifico',
    paginas: 300
}, {
    titulo: 'Codigo limpio',
    autor: 'Andres',
    genero: 'Tecnologia',
    paginas: 250
}, {
    titulo: 'Programacion web',
    autor: 'Eva',
    genero: 'Tecnologia',
    paginas: 400
}]

listaLibros.push({
    titulo: 'Javascript',
    autor: 'Fernando',
    genero: 'Tecnologia',
    paginas: 300
})

const librosAutor = listaLibros.filter((libro) =>  libro.autor.toLowerCase() === 'fernando')
const librosGeneros = listaLibros.filter((libro) => libro.genero === 'Tecnologia')


listaLibros.sort((a, b) => a.titulo.localeCompare(b.titulo))

listaLibros.splice(1, 1)

console.log(listaLibros)