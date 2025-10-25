let continuar = true;
while (continuar){    
    let monto = parseInt(prompt("Ingresa la cantidad a retirar:"));
    let billete100 = 0, billete50 = 0, billete20 = 0, billete10 = 0;
    billete100 = Math.floor(monto / 100);
    billete50 = Math.floor((monto % 100) / 50);
    billete20 = Math.floor(((monto % 100) % 50) / 20);
    billete10 = (((monto % 100) % 50) % 20) / 10;
    console.log(`La cantidad de billetes de 100 es ${billete100}, la de 50 es ${billete50}, la de 20 es ${billete20} y de 10 es ${billete10}`);
    console.log("---------------------------------------");
    continuar = prompt("¿Quiero seguir? (S/N)").toUpperCase();
    if (continuar == "S"){
        continuar = true;
    }
    else{
        continuar = false;
    }
}