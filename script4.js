let continuar = true;
while (continuar){
    let numero = parseInt(prompt("Ingresa el número para realizar la tabla:"));
    for(let i=1; i<=12; i++){
        console.log(`${numero} x ${i} = `+ (i*numero));
    }
    console.log("---------------------------------------");
    continuar = prompt("¿Quiero seguir? (S/N)").toUpperCase();
    if (continuar == "S"){
        continuar = true;
    }
    else{
        continuar = false;
    }
}
