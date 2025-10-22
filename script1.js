let total = 0, cantidad = 5;
for (let i = 1; i <= cantidad; i++) {
    let nota = parseFloat(prompt(`Ingresa la nota ${i} (0 a 20):`));
    while (isNaN(nota) || nota < 0 || nota > 20) {
        console.log("La nota debe estar entre 0 y 20.");
        nota = parseFloat(prompt(`Vuelve a ingresar la nota ${i} (0 a 20):`));
    }
    total += nota;
}