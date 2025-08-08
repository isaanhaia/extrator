const BotaoMostraPalavras = document.querySelector('#botao-palavrachave');

BotaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave (){
const texto = document.querySelector('#entrada-de-texto').value; 
const campoResultado = document.querySelector ('#resultado-palavrachave');
const palavras = texto.split(" ");
campoResultado.textContent = palavras.join(", ");
}