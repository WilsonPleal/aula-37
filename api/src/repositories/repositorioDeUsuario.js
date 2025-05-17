const { Usuario } = require("../models/Usuario");

class RepositorioDeUsuario {
  buscarTodos() {
    return Usuario.buscarTodos();
  }

  buscarPeloId(id) {
    return Usuario.buscarPeloId(id);
  }

  criar(usuario) {
    return usuario.salvar();
  }

  buscarPeloEmail(email) {
    return Usuario.buscarPeloEmail(email);
  }
}

module.exports = new RepositorioDeUsuario();
