const Botao = document.querySelector('#botao-palavrachave');

Botao.addEventListener('click', mostraChave);

function mostraChave (){
const texto = document.querySelector('#entrada-de-texto').value; 
const Resultado = document.querySelector ('#resultado-palavrachave');
const palavrasChave = processaTexto(texto);

Resultado.textContent = palavrasChave.join(", ");
}
function processaTexto(texto){
  let palavras = texto.split(/\P{L}+/u);
    return palavras;
}