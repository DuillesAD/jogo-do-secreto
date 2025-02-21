let listaDeNumerosSorteados = [];
let numeroLimite = 50;
let nummeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNatela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});   

}

function exibirMensagenInicial() {
    exibirTextoNatela('h1', 'Jogo do numero secreto');
    exibirTextoNatela('p', 'Descubra um número entre 1 e 50');
}
exibirMensagenInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
   if (chute == nummeroSecreto) {
    exibirTextoNatela('h1', 'Acertou!!');
    let palavraTetativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTetativa}!`;
    exibirTextoNatela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
   } else{
    if (chute > nummeroSecreto) {
        exibirTextoNatela('p','O número secreto é menor');
    }else{
        exibirTextoNatela('p', 'O número secreto e maior');
    }
    tentativas++;
    limparCampo();
   }
}
function gerarNumeroAleatorio() {
    numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
}

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
    
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    nummeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoNatela('h1', 'Jogo do numero secreto');
    exibirTextoNatela('p', 'Escolha um número entre 1 e 10');
   exibirMensagenInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true);
}