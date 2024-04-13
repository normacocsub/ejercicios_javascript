const obtenerDatos = () => {
    return new Promise((success, error) => {
        setTimeout(() => {
            let datos = { id: '123', nombre: 'Fernando' }
            success(datos)
        }, 5000);
    })
}


const main = async () => {
    const resultado = await obtenerDatos()
    console.log(resultado)
    console.log('Hola')
}

main()
