import {
  atualizaDocumento,
  encontrarDocumento,
  excluirDocumento,
} from '../db/documentosDb.js';

function registrarEventosDocumento(socket, io) {
  //Selecionar documento e entrar em sala específica:
  socket.on('selecionar_documento', async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);

    const documento = await encontrarDocumento(nomeDocumento);

    if (documento) {
      devolverTexto(documento.texto);
    }
  });

  //Editar o texto do documento selecionado:
  socket.on('texto_editor', async ({ texto, nomeDocumento }) => {
    const atualizacao = await atualizaDocumento(nomeDocumento, texto);

    if (atualizacao.modifiedCount) {
      socket.to(nomeDocumento).emit('texto_editor_clientes', texto);
    }
  });

  //Excluir o documento selecionado:
  socket.on('excluir_documento', async (nome) => {
    const resultado = await excluirDocumento(nome);

    if (resultado.deletedCount) {
      io.emit('excluir_documento_sucesso', nome);
    }
  });
}

export default registrarEventosDocumento;
