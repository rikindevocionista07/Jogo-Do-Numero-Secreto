let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeros = gerarNumeroAleatorio();
let tentativas = 1;

function mensagem(tag, texto) {
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}

function exibirMensagemInicial() {
    mensagem('h1', 'Jogo do número secreto');
    mensagem('p', 'Escolha um número de 1 a 3');
}
exibirMensagemInicial();

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    console.log(numeros);
   
    if (chute === numeros) {
        mensagem('h1', 'Acertou!');
        let mensagemTentativas = `Você achou o número secreto com ${tentativas} ${tentativas > 1 ? 'tentativas' : 'tentativa'}`;
        mensagem('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeros) {
            mensagem('p', 'O número secreto é menor');
        } else {
            mensagem('p', 'O número secreto é maior');
        }
        tentativas++;
    }
    limparCampo();
}

function reiniciarJogo() {
    numeros = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true); 
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 3 + 1); // Mudado para 10 para incluir 10
    let QuantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if(QuantidadeDeElementosNaLista == 3 ){
        listaDeNumerosSorteados = []
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    let chute = document.querySelector('input'); 
    chute.value = '';
}