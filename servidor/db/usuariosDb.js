import criaHashSalSenha from '../utils/criaHashSalSenha.js';
import { usuariosColecao } from './dbConnect.js';

function encontrarUsuario(nome) {
  return usuariosColecao.findOne({ nome });
}

function cadastrarUsuario({ nome, senha }) {
  const { hashSenha, salSenha } = criaHashSalSenha(senha);

  return usuariosColecao.insertOne({ nome, hashSenha, salSenha });
}

export { cadastrarUsuario, encontrarUsuario };
