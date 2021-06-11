function table(number) {
 
    let title = `Multiplication table ${number}`
    console.log(title);
 
    for (let i = 1; i <= 10; i++) {
 
        let result = i * number;
 
        let resultFinal = (`${i} X ${number} = ${result}`);
        console.log(resultFinal);
    }
}
 
table(9);


// function tablaMultiplicar (numero) {
//     let resultado = `# Tabla del ${numero} # \n`;

//     for (let i = 1; i <=10; i++){
//         let multiplicacion = (i*numero);

//         resultado += `${i} x ${numero} = ${multiplicacion}`
//     }

//     return resultado;
// }

// console.log(tablaMultiplicar(5))