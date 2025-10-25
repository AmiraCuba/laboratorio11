let continuar = true;
while (continuar){    
    let rango = parseInt(prompt("Ingrese el rango:"));
    let numerosPrimos = "", esPrimo = true;
    for(let i=2; i<=rango; i++){
        for(let j=2; j<i; j++){
            if (i % j == 0){
                esPrimo = false;
                break;
            }
        }
        if (esPrimo){
            numerosPrimos += ` ${i}`;
        }
        esPrimo = true
    }
    console.log(numerosPrimos);
    console.log("---------------------------------------");
    continuar = prompt("¿Quiero seguir? (S/N)").toUpperCase();
    if (continuar == "S"){
        continuar = true;
    }
    else{
        continuar = false;
    }
}