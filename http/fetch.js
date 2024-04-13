const obtenerDatos = async () => {
    try {
        const result = await fetch('https://661ae3d365444945d04eb852.mockapi.io/persona')
        const datos = await result.json()
        datos.forEach((item, index) => {
            console.log(index)
            console.log('   ')
            console.log(`Nombre: ${item.nombre}`)
            console.log(`Id: ${item.id}`)
            console.log('- - - - -')
        });
    } catch (error) {
        console.error(error)
    } 
}

obtenerDatos()