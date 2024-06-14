const Controller = require('./Controller.js');
const MatriculaServices = require('../services/MatriculaServices.js');

const matriculasServices = new MatriculaServices();

class MatriculaController extends Controller {
  constructor() {
    super(matriculasServices);
  }

  async pegaMatriculasPorEstudante(req, res) {
    const { estudante_id } = req.params;
    try {
      const listaMatriculasPorEstudante = await matriculasServices.pegaEContaRegistros({
        estudante_id: Number(estudante_id),
        status: 'matriculado'
      });
      return res.status(200).json({ message: 'Busca realizada com sucesso.', listaMatriculasPorEstudante });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = MatriculaController;