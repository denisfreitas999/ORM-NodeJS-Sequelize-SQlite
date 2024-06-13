class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async pegaTodos(req, res) {
    try {
      // Acessar o modelo
      const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json({ message: 'Busca realizada com sucesso.', listaDeRegistro });
    } catch (error) {
      // Tratamento de erro
    }
  }
}

module.exports = Controller;