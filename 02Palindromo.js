function palindromo (texto) {
    let invertido =  texto
                    .split('')
                    .reverse()
                    .join('');

    if (invertido == texto){
        return "Si, así es :)";
    } else {
        return "No, no lo es :C";
    }
}
console.log("¿La palabra es un palindromo? " + palindromo("skkssss"))