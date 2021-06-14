function coincidencias (frase, busqueda) {
    let textoLimpio = frase.toLowerCase().replace(/[!¡.,-]/gi,'');
    let resultado = 0;

    if (textoLimpio.includes((busqueda))){
        let palabras = textoLimpio.split(" ");
        let mapa = {};

        for (let palabra of palabras){
            if (mapa[palabra]){
                mapa[palabra]++
            } else {
                mapa[palabra] = 1;
            }
        }
        
            resultado =  mapa [busqueda];

    } else {
        resultado = 0;
    }
    return resultado;
}
console.log("Numero de coincidencias: ", coincidencias("Hola hugo hugo hugo", "hugo"));