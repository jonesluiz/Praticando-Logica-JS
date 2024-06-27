let listaDeNumeros = [5, 10, 3, 4, 1];
let mostraNumeros = prompt(`Os números são:\n\n${listaDeNumeros.join(', ')}\n\nQuer ordená-los em ordem Crescente ou Decrescente ou clique em Cancelar?`);

while (mostraNumeros !== null) {
    if (mostraNumeros === 'crescente') {
        ordemCrescente();
    } else if (mostraNumeros === 'decrescente') {
        ordemDecrescente();
    } else {
        alert('Opção inválida! Por favor, escolha entre "crescente", "decrescente" ou clique em cancelar.');
    }
    
    mostraNumeros = prompt(`Os números são:\n\n${listaDeNumeros.join(', ')}\n\nQuer ordená-los em ordem Crescente ou Decrescente ou clique em Cancelar?`);
}

alert('OK, até logo!');

function ordemCrescente() {
    listaDeNumeros.sort((a, b) => a - b);
    alert(`Com isso, os números ficarão nessa sequência:\n\n${listaDeNumeros.join(', ')}`);
}

function ordemDecrescente() {
    listaDeNumeros.sort((a, b) => b - a);
    alert(`Com isso, os números ficarão nessa sequência:\n\n${listaDeNumeros.join(', ')}`);
}