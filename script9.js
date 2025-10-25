let continuar = true;
while (continuar){    
    let numeroString = prompt("Ingrese el número a comprobar:");
    let numeroInt = parseInt(numeroString);
    let suma = 0;
    for (const letra of numeroString) {
        let digito = parseInt(letra);
        suma += digito**numeroString.length;
    }
    if (numeroInt == suma){
        console.log(`El número ${numeroInt} si es uno de Armstrong`);
    }
    else {
        console.log(`El número ${numeroInt} no es uno de Armstrong`);
    }
    continuar = prompt("¿Quiero seguir? (S/N)").toUpperCase();
    if (continuar == "S"){
        continuar = true;
    }
    else{
        continuar = false;
    }
}