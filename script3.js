let numero, numerosPar = 0, numerosImpar = 0;
for (let i=1; i<=10; i++) {
    numero = parseInt(prompt(`Ingresa el número ${i}:`));
    if (numero % 2 == 0){
        numerosPar++;
    }
    else {
        numerosImpar++;
    }
}    
console.log(`La cantidad de impares es ${numerosImpar} y la de pares es ${numerosPar}`);