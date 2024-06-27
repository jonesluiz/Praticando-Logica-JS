let jogosAlugados = 0;

function contagemAlugado(){
    console.log(`Total de jogos alugados: ${jogosAlugados}`)
}



function alterarStatus(id){ //O id especifica qual o jogo que foi escolhido de acordo com o html

    let gameClicado = document.getElementById(`game-${id}`);

    //O . antes classifica o elemento buscado como uma class, então estamos buscando a tag que contem essa class.
    let imagem = gameClicado.querySelector('.dashboard__item__img'); 
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if(imagem.classList.contains('dashboard__item__img--rented')){

        if(confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados--;
        }     
    }else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
    }

    contagemAlugado();
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});