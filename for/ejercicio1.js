const prompt = require('prompt-sync')({ sigint: true})



const registroPaciente = () => {
    console.clear()
    console.log('Registro Pacientes. ')
    let nombre = prompt("Digite el nombre: ")
    let edad = Number(prompt("Digite la edad: "))
    let numeroSeguro = prompt("Digite el numero de seguro: ")
    let temperatura = Number(prompt("Digite la temperatura: "))
    const paciente = { nombre, edad, numeroSeguro, temperatura }
    console.clear()

    console.log("Resumen registro. ")
    console.log(`Numero Seguro: ${numeroSeguro}`)
    console.log(`Nombre: ${nombre}`)
    console.log(`Edad: ${edad}`)
    console.log(`Temperatura: ${temperatura}`)
    prompt('')
    return paciente
}

const buscarPaciente = (numero) => {
    const pacienteBusqueda = pacientes.find(p => p.numeroSeguro === numero)
    console.clear()


    if (!pacienteBusqueda) {
        console.log("No se encontro el paciente. ")
        prompt('')
        return
    }

    console.log("Resumen Consulta. ")
    console.log(`Numero Seguro: ${pacienteBusqueda.numeroSeguro}`)
    console.log(`Nombre: ${pacienteBusqueda.nombre}`)
    console.log(`Edad: ${pacienteBusqueda.edad}`)
    console.log(`Temperatura: ${pacienteBusqueda.temperatura}`)
    prompt('')
}

const consultarPacientes = () => {
    console.clear()
    console.log("Consultar Pacientes. ")
    pacientes.forEach((item, index) => {
        console.log(' ')
        console.log(`${index+1}`)
        console.log(`Numero Seguro: ${item.numeroSeguro}`)
        console.log(`Nombre: ${item.nombre}`)
        console.log(`Edad: ${item.edad}`)
        console.log(`Temperatura: ${item.temperatura}`)
        console.log(' ')
        console.log('----------------------------')
    });
    prompt('')
}

let menu = true
const pacientes = []
while (menu) {
    console.clear()
    console.log('Menu:  ')
    console.log('1. Registrar Paciente. ')
    console.log('2. Consultar Paciente. ')
    console.log('3. Consultar Pacientes. ')
    console.log('4. Salir. ')

    const opcion = Number(prompt('Digite una opcion: '))
    switch (opcion) {
        case 1:
            let paciente = registroPaciente()
            pacientes.push(paciente)
            break
        case 2:
            console.clear()
            console.log("Consulta Paciente. ")
            let numeroConsulta = prompt("Digite el numero de seguro a buscar: ")
            buscarPaciente(numeroConsulta)
            break
        case 3:
            consultarPacientes()
            break
        case 4:
            console.clear()
            console.log('Se ha salido de la app. ')
            menu = false
            prompt('')
            break
        default:
            console.clear()
            console.log('Digite una opcion correcta. ')
            prompt('')
            break
    }
}