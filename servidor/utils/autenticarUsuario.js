import { scryptSync, timingSafeEqual } from 'crypto';

function autenticarUsuario(senhaDigitada, usuario) {
  const hastTeste = scryptSync(senhaDigitada, usuario.salSenha, 64);

  const hashReal = Buffer.from(usuario.hashSenha, 'hex');

  const autenticado = timingSafeEqual(hastTeste, hashReal);

  return autenticado;
}

export default autenticarUsuario;
