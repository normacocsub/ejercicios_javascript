const prompt = require('prompt-sync')({ sigint: true})

let menu = true
while ( menu ) {
    console.log("Menu. ")
    let opcion = Number(prompt("Digite un numero: "))
    switch (opcion) {
        case 1: 
            console.log("Caso 1.")
            break
        case 2:
            console.log("Caso 2.")
            menu = false
            break
    }
    
}