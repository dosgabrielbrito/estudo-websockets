import { alertarRedirecionar, atualizaTextoEditor } from './documento.js';

const socket = io();

//Emissão de eventos de Front-End:
function selecionarDocumento(nome) {
  socket.emit('selecionar_documento', nome, (texto) =>
    atualizaTextoEditor(texto)
  );
}

function emitirTextoEditor(dados) {
  socket.emit('texto_editor', dados);
}

function emitirExcluirDocumento(nome) {
  socket.emit('excluir_documento', nome);
}

//Retorno de eventos de Front-End:
socket.on('texto_documento', (texto) => {
  atualizaTextoEditor(texto);
});

socket.on('texto_editor_clientes', (texto) => {
  atualizaTextoEditor(texto);
});

socket.on('excluir_documento_sucesso', (nome) => {
  alertarRedirecionar(nome);
});

export { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento };
