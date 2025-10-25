let continuar = true;
let notas = [];
while (continuar) {    
    console.log(
`=== MENÚ PRINCIPAL ===
1. Calcular estadísticas de N notas
2. Promedio de notas
3. Valor máximo de notas
4. Valor mínimo de notas
5. Cantidad de pares e impares en notas
6. Cuántos están por encima del promedio en notas
7. Contar números pares e impares en un rango
8. Generar una tabla de multiplicar
9. Salir`);
    let opcion = parseInt(prompt("Ingrese un número:"));
    switch (opcion) {
        case 1:
            let n = parseInt(prompt("¿Cuántas notas deseas ingresar?"));
            notas = [];
            for (let i = 0; i < n; i++) {
                notas.push(parseFloat(prompt(`Ingresa la nota ${i + 1}:`)));
            }
            console.log("Notas guardadas correctamente.");
            break;
        case 2:
            if (notas.length === 0) console.log("Primero ingresa las notas en la opción 1.");
            else {
                let promedio = notas.reduce((a, b) => a + b, 0) / notas.length;
                console.log(`Promedio: ${promedio.toFixed(2)}`);
            }
            break;
        case 3:
            if (notas.length === 0) 
                console.log("Primero ingresa las notas en la opción 1.");
            else 
                console.log(`Valor máximo: ${Math.max(...notas)}`);
            break;
        case 4:
            if (notas.length === 0) 
                console.log("Primero ingresa las notas en la opción 1.");
            else 
                console.log(`Valor mínimo: ${Math.min(...notas)}`);
            break;
        case 5:
            if (notas.length === 0) 
                console.log("Primero ingresa las notas en la opción 1.");
            else {
                let pares = notas.filter(x => x % 2 === 0).length;
                let impares = notas.length - pares;
                console.log(`Pares: ${pares}\nImpares: ${impares}`);
            }
            break;
        case 6:
            if (notas.length === 0) 
                console.log("Primero ingresa las notas en la opción 1.");
            else {
                let promedio = notas.reduce((a, b) => a + b, 0) / notas.length;
                let mayores = notas.filter(x => x > promedio).length;
                console.log(`Hay ${mayores} notas por encima del promedio (${promedio.toFixed(2)}).`);
            }
            break;
        case 7:
            let inicio = parseInt(prompt("Ingrese el inicio del rango:"));
            let fin = parseInt(prompt("Ingrese el final del rango:"));
            let paresRango = 0, imparesRango = 0;
            for (let i = inicio; i <= fin; i++) {
                if (i % 2 === 0) paresRango++;
                else imparesRango++;
            }
            console.log(`Entre ${inicio} y ${fin}:\nPares: ${paresRango}\nImpares: ${imparesRango}`);
            break;
        case 8:
            let num = parseInt(prompt("¿Qué número deseas multiplicar?"));
            let tabla = "";
            for (let i = 1; i <= 10; i++) {
                tabla += `${num} x ${i} = ${num * i}\n`;
            }
            console.log(tabla);
            break;
        case 9:
            continuar = false;
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("Opción no válida. Intenta nuevamente.");
    }
}