let continuar = true;
while (continuar){    
    let rango = parseInt(prompt("Ingrese el rango:"));
    let suma = 0;
    for(let i=1; i<=rango; i++){
        if (i % 5 == 0){
            continue;
        }
        suma += i;
    }
    console.log(`La suma de los números hasta el ${rango}, sin los múltiplos de 5 es ${suma}`);
    console.log("---------------------------------------");
    continuar = prompt("¿Quiero seguir? (S/N)").toUpperCase();
    if (continuar == "S"){
        continuar = true;
    }
    else{
        continuar = false;
    }
}