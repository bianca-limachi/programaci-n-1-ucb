function ContarVocales(palabra){
    var contarVocales = 0;
    palabra.split('').forEach(element => {    
        if(element == 'a' || element == 'A'){
            contarVocales++;
        }
        if(element == 'e' || element == 'E'){
            contarVocales++;
        }
        if(element == 'i' || element == 'I'){
            contarVocales++;
        }
        if(element == 'o' || element == 'O'){
            contarVocales++;
        }
        if(element == 'u' || element == 'U'){
            contarVocales++;
        }
    });
    console.log(contarVocales);
    return ContarVocales;
}

function ContarPalabras(texto){
	var contar = 0;
	texto.split(' ').forEach(element => {
    	contar++;    
    });
    console.log(contar);

    return ContarPalabras;
}
/*
var texto = "Presta atención Rafael";
ContarPalabras(texto);
*/

function ContarCaracteres(texto){
    var resultado = 0;
    texto.split('').forEach(element => {
        resultado++;
b
    });
    console.log(resultado);
    return ContarCaracteres;
}
var texto = "Hola Mundo";

ContarCaracteres(texto);