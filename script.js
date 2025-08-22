import { PALAVRAS_INDESEJAVEIS } from "./palavrasIndesejaveis";

const botaoExtraiPalavras = document.querySelector('#botao-palavrachave');

botaoExtraiPalavras.addEventListener('click', exibePalavrasChave );

function exibePalavrasChave() {
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavrasChave = analisaTexto(texto);

    campoResultado.textContent = palavrasChave.join(", ");
}

function analisaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);

    for (let i in palavras) {
        palavras[i] = palavras[i].toLowerCase();
    }

    palavras = tiraPalavrasIndesejaveis(palavras);

    const frequencias = contaFrequencias(palavras);
    let ordenadas = Object.keys(frequencias).sort(ordenaPalavra);

    function ordenaPalavra(p1, p2) {
        return frequencias[p2] - frequencias[p1];
    }

    return ordenadas.slice(0, 10);
}

function contaFrequencias(palavras) {
    let frequencias = {};
    for (let i of palavras) {
        frequencias[i] = 0;
        for (let j of palavras) {
            if (i == j) {
                frequencias[i]++;
            }
        }
    }
    return frequencias;
}

function tiraPalavrasIndesejaveis(palavras) {
    const palavrasDesejaveis = [];
    for (let palavra of palavras) {
        if (!PALAVRAS_INDESEJAVEIS.has(palavra) && palavra.length > 2) {
            palavrasDesejaveis.push(palavra);
        }
    }
    return palavrasDesejaveis;
}