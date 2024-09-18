import {
  emitirExcluirDocumento,
  emitirTextoEditor,
  selecionarDocumento,
} from './socket-front-documento.js';

//Elementos de Front-End:
const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get('nome');
const textoEditor = document.getElementById('editor-texto');
const tituloDocumento = document.getElementById('titulo-documento');
const botaoExcluir = document.getElementById('excluir-documento');

tituloDocumento.textContent = nomeDocumento || 'Documento sem título';

//Funções de Front-End:
selecionarDocumento(nomeDocumento);

textoEditor.addEventListener('keyup', () => {
  emitirTextoEditor({
    texto: textoEditor.value,
    nomeDocumento,
  });
});

botaoExcluir.addEventListener('click', () => {
  emitirExcluirDocumento(nomeDocumento);
});

function atualizaTextoEditor(texto) {
  textoEditor.value = texto;
}

function alertarRedirecionar(nome) {
  if (nome === nomeDocumento) {
    alert(`Documento ${nome} excluido!`);
    window.location.href = '/';
  }
}

export { atualizaTextoEditor, alertarRedirecionar };
