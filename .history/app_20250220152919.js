let listaDeNumerosSorteados = []
let numeros = gerarNumeroAletarorio();
let tentativas = 1;
let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'     

function mensagem(tag,texto) {
    let titulo = document.querySelector(tag)
    titulo.innerHTML = texto;
}
mensagem('h1','Jogo secreto');
mensagem('p', 'Escolha 1 a 10');

function exibirMensagemInicial(){
    mensagem('h1','Jogo do numero secreto');
    mensagem('p', 'Escolha 1 a 10');
}
exibirMensagemInicial();

function verificarChute() {
   let chute = document.querySelector ('input').value
console.log(numeros)
   
if (chute == numeros ) {
        mensagem('h1', 'Acertou')
        let mensagemTentativas = `Voce achou numero secreto com ${tentativas} ${palavraTentativas}`;
        mensagem('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }  else { if (chute > numeros){
        mensagem('p','O numero secreto é menor')   
    } else {
        if(chute < numeros){
            mensagem('p','o numero secreto é maior');
        }
    }
        tentativas++
    }  limparCampo()

}
function reiniciarJogo(){
 numeros = gerarNumeroAletarorio()
 limparCampo()
 tentativas = 1
 exibirMensagemInicial()
document.getElementById('reiniciar').setAttribute('disabled', true )
}

function gerarNumeroAletarorio (){
let quantidadesDeElementosNaLista = numeroEscolhido.length;
    let numeroEscolhido = parseInt(Math.random() * 7 + 1)
if (listaDeNumerosSorteados.includes(numeroEscolhido)){
return gerarNumeroAletarorio()
} else {
    listaDeNumerosSorteados.push(numeroEscolhido)
console.log(listaDeNumerosSorteados)
    return numeroEscolhido;
}


}
function limparCampo () {
    chute = document.querySelector('input'); 
    chute.value = '';
 
 }
 alert('egergegwfS')
 