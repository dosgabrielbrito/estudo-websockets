import { MongoClient } from 'mongodb';

const cliente = new MongoClient(
  'mongodb+srv://admin:admin@aluradocs.7fxj4.mongodb.net/?retryWrites=true&w=majority&appName=AluraDocs'
);

let documentosColecao;

try {
  await cliente.connect();

  const db = cliente.db('alura-websockets');
  documentosColecao = db.collection('documentos');

  console.log('Conectado no banco de dados com sucesso!');
} catch (erro) {
  console.log(erro);
}

export { documentosColecao };
