import {
  adicionarDocumento,
  encontrarDocumento,
  obterDocumentos,
} from '../db/documentosDb.js';

function registrarEventosInicio(socket, io) {
  //Obter documentos da db:
  socket.on('obter_documentos', async (devolverDocumentos) => {
    const documentos = await obterDocumentos();

    devolverDocumentos(documentos);
  });

  //Adicionar documentos na db:
  socket.on('adicionar_documento', async (nome) => {
    const documentoExiste = (await encontrarDocumento(nome)) !== null;

    if (documentoExiste) {
      socket.emit('documento_existente', nome);
    } else {
      const resultado = await adicionarDocumento(nome);

      if (resultado.acknowledged) {
        io.emit('adicionar_documento_interface', nome);
      }
    }
  });
}

export default registrarEventosInicio;
