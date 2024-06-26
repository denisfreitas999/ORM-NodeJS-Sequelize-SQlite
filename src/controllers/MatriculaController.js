const Controller = require('./Controller.js');
const MatriculaServices = require('../services/MatriculaServices.js');
const Sequelize = require('sequelize');
const matriculasServices = new MatriculaServices();

class MatriculaController extends Controller {
  constructor() {
    super(matriculasServices);
  }

  async pegaMatriculasPorEstudante(req, res) {
    const { estudante_id } = req.params;
    try {
      const listaMatriculasPorEstudante = await matriculasServices.pegaEContaRegistros(
        {
          where: {
            estudante_id: Number(estudante_id),
            status: 'matriculado'
          },
          limit: 2,
          order: [['id', 'ASC']]
        }
      );
      return res.status(200).json({ message: 'Busca realizada com sucesso.', listaMatriculasPorEstudante });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async pegaCursosLotados(req, res) {
    const lotacaoCurso = 2;
    try {
      const cursosLotados = await matriculasServices.pegaEContaRegistros({
        where: {
          status: 'matriculado'
        },
        attributes: ['curso_id'],
        group: ['curso_id'],
        having: Sequelize.literal(`count(curso_id) >= ${lotacaoCurso}`)
      });
      return res.status(200).json({ message: 'Busca realizada com sucesso.', cursosLotados });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = MatriculaController;