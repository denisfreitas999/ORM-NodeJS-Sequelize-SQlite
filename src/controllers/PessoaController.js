const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoasServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoasServices);
  }

  async pegaMatriculasAtivas(req, res) {
    const { estudante_id } = req.params;
    try {
      const listaMatriculas = await pessoasServices.pegaMatriculasAtivasPorEstudante(Number(estudante_id));
      return res.status(200).json({ message: 'Matriculas buscadas com sucesso.', listaMatriculas });
    } catch (error) {
      // Tratamento de erro
      return res.status(500).json({ message: error.message });
    }
  }

  async pegaTodasAsMatriculas(req, res) {
    const { estudante_id } = req.params;
    try {
      const listaMatriculas = await pessoasServices.pegaTodasAsMatriculasPorEstudante(Number(estudante_id));
      return res.status(200).json({ message: 'Matriculas buscadas com sucesso.', listaMatriculas });
    } catch (error) {
      // Tratamento de erro
      return res.status(500).json({ message: error.message });
    }
  }

  async pegaTodasAsPessoas(req, res) {
    try {
      const listaTodasAsPessoas = await pessoasServices.pegaPessoasEscopoTodos();
      return res.status(200).json({ message: 'Pessoas buscadas com sucesso.', listaTodasAsPessoas });
    } catch (error) {
      // Tratamento de erro
      return res.status(500).json({ message: error.message });
    }
  }

}

module.exports = PessoaController;