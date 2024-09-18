import './socket-front-index.js';
import { emitirAdicionarDocumento } from './socket-front-index.js';

//Elementos de Front-End:
const listaDocumentos = document.getElementById('lista-documentos');
const form = document.getElementById('form-adiciona-documento');
const inputDocumento = document.getElementById('input-documento');

//Funções de Front-End:
form.addEventListener('submit', (evento) => {
  evento.preventDefault();
  emitirAdicionarDocumento(inputDocumento.value);
  inputDocumento.value = '';
});

function inserirLinkDocumento(nomeDocumento) {
  listaDocumentos.innerHTML += `
    <a
        href="documento.html?nome=${nomeDocumento}" class="list-group-item list-group-item-action" id="docuemnto-${nomeDocumento}">
        ${nomeDocumento}
    </a>
    `;
}

function removerLinkDocumento(nomeDocumento) {
  const documento = document.getElementById(`docuemnto-${nomeDocumento}`);
  listaDocumentos.removeChild(documento);
}

export { inserirLinkDocumento, removerLinkDocumento };
