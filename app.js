let listaDeNumerosSorteados = [];
let numeroLimite = 50; // Alinhar com a mensagem
let numeros = gerarNumeroAleatorio();
let tentativas = 1;

function mensagem(tag, texto) {
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemInicial() {
    mensagem('h1', 'Jogo do número secreto');
    mensagem('p', 'Escolha um número de 1 a 50'); // Alinhar com o limite
}

exibirMensagemInicial();

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    console.log(numeros);
    
    if (isNaN(chute)) {
        mensagem('p', 'Por favor, insira um número válido!');
        return; // Adicionando verificação para números válidos
    }

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
    listaDeNumerosSorteados = []; // Limpar a lista ao reiniciar
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
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