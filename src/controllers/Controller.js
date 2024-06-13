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
      return res.status(500).json({ message: 'Erro no servidor.' });
    }
  }

  async pegaUmPorId(req, res) {
    const { id } = req.params;
    try {
      const umRegistro = await this.entidadeService.pegaUmRegistroPorId(Number(id));
      return res.status(200).json({ message: 'Registro encontrado com sucesso.' }, umRegistro);
    } catch (error) {
      // Tratamento de erro
      return res.status(500).json({ message: 'Erro no servidor.' });
    }
  }

  async criaNovo(req, res) {
    const dadosParaCriacao = req.body;
    try {
      const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosParaCriacao);
      return res.status(200).json({ message: 'Registro criado com sucesso', novoRegistroCriado });
    } catch (error) {
      // Tratamento de erro
      return res.status(500).json({ message: 'Erro no servidor.' });
    }
  }

  async atualiza(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    try {
      //    isUpdated
      const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id));
      if (!foiAtualizado) {
        return res.status(400).json({ message: 'O registro não foi atualizado.' });
      }
      return res.status(200).json({ message: 'Registro atualizado com sucesso.' });
    } catch (error) {
      // Tratamento de erro
      return res.status(500).json({ message: 'Erro no servidor.' });
    }
  }

  async exclui(req, res) {
    const { id } = req.params;
    try {
      await this.entidadeService.excluiRegistro(Number(id));
      return res.status(200).json({ message: `Registro com o id ${id} excluido com sucesso.` });
    } catch (error) {
      // Tratamento de erro
      return res.status(500).json({ message: 'Erro no servidor.' });
    }
  }
}

module.exports = Controller;