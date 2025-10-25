let continuar = true;
while (continuar){    
    console.log("MENÚ DE OPCIONES");
    console.log("1. Calcular área del círculo \n2. Calcular área del rectángulo \n3. Salir");
    let opcion = parseInt(prompt("Ingrese un número:"));
    switch (opcion) {
        case 1:
            let radio = parseFloat(prompt("Ingresa el radio:"));
            let areaCirculo = ((radio**2)*(3.14)).toFixed(2);
            console.log(`El área del círculo es ${areaCirculo}`);
            break;
        case 2:
            let ancho = parseFloat(prompt("Ingresa el ancho:"));
            let alto = parseFloat(prompt("Ingresa el alto:"));
            let areaRectangulo = (alto*ancho).toFixed(2);
            console.log(`El área del rectángulo es es ${areaRectangulo}`);
            break;
        case 3:
            continuar = false;
            break; 
    }
}