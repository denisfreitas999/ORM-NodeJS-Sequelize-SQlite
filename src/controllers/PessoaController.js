const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoasServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoasServices);
  }

  async pegaMatriculas(req, res) {
    const { estudanteId } = req.params;
    try {
      const listaMatriculas = await pessoasServices.pegaMatriculasPorEstudante(Number(estudanteId));
      return res.status(200).json({ message: 'Matriculas buscadas com sucesso.', listaMatriculas });
    } catch (error) {
      // Tratamento de erro
      return res.status(500).json({ message: 'Erro no servidor.' });
    }
  }

}

module.exports = PessoaController;