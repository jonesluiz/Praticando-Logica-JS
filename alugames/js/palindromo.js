essaPalavraEUmPalindromo("AmoraRoma");

function essaPalavraEUmPalindromo(palavra){
    let separandoAsLetras = palavra.split('');
    let palavraInvertida = separandoAsLetras.reverse();
    palavraInvertida = palavraInvertida.join('');
        if(palavra == palavraInvertida){
            console.log(`A palavra ${palavra} é um palíndromo`);
        }else{
            console.log(`A palavra ${palavra} não é um palíndromo.`);
        }
}