let edad = parseInt(prompt("Ingresa tu edad:")), etapa;
if (edad<=12){
    etapa = "niño";
}
else if (edad<=17){
    etapa = "adolescente";
}
else if (edad<=59){
    etapa = "adulto";
}
else {
    etapa = "adulto mayor";
}
console.log(`Su etapa de la vida es ${etapa}`);