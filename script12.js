let presupuesto = parseFloat(prompt("Ingresa tu presupuesto máximo:"));
let total = 0;
let continuar = true;
let contador = 0;
if (isNaN(presupuesto) || presupuesto <= 0) {
    console.log("Presupuesto inválido. Fin del programa.");
} else {
    while (continuar) {
        let precio = parseFloat(prompt("Ingresa el precio del producto:"));
        if (isNaN(precio) || precio <= 0) {
            console.log("Ingresa un precio válido.");
            continue;
        }
        if (total + precio > presupuesto) {
            console.log(`No puedes agregar este producto. Supera tu presupuesto de S/ ${presupuesto.toFixed(2)}.`);
            continuar = false;
            continue;
        }
        total += precio;
        contador++;
        console.log(`Producto agregado: S/ ${precio.toFixed(2)}`);
        console.log(`Total parcial: S/ ${total.toFixed(2)} (Presupuesto restante: S/ ${(presupuesto - total).toFixed(2)})`);
        let respuesta = prompt("¿Deseas agregar otro producto? (s/n):").toLowerCase();
        if (respuesta !== "s") {
            continuar = false;
        }
    }
    console.log("=== RESUMEN DE COMPRA ===");
    console.log(`Productos agregados: ${contador}`);
    console.log(`Total parcial: S/ ${total.toFixed(2)}`);
    if (total > 100) {
        console.log("Tiene un descuento del 10%");
        total *= 0.9;
    } else if (total >= 50 && total <= 100) {
        console.log("Gana un cupón de 5%");
        total *= 0.95;
    } else {
        console.log("No aplica descuento");
    }
    console.log(`Total final a pagar: S/ ${total.toFixed(2)}`);
    console.log(`Presupuesto restante: S/ ${(presupuesto - total).toFixed(2)}`);
    console.log("Gracias por su compra.");
}