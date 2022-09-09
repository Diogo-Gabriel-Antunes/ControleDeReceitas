const { Op } = require("sequelize");
const database = require("../models");

class ResumosController {
  static async resumoDoMes(req, res) {
    const { ano, mes } = req.params;
    const where = {
      data: {
        [Op.gte]: `${ano}-${mes}-01`,
        [Op.lte]: `${ano}-${mes}-30`,
      },
    };
    let listaCategorias = [];
    const categorias = await database.categorias.findAll();

    const despesas = categorias.forEach(async (categoria) => {
      const despesas = await database.despesas.sum("valor", {
        where: { categoria_id: categoria.dataValues.id },
        group: "categoria_id",
      });
  
      if (despesas) {
        listaCategorias.push({
          categoria: categoria.dataValues.tipo,
          valor: despesas,
        });
      }
    });
    
    try {
      const despesasDoMes = await database.despesas.sum("valor", { where });
      const receitasDoMes = await database.receitas.sum("valor", { where });
      const saldoFinalDoMes = receitasDoMes - despesasDoMes;

      console.log(despesas);
      return res
        .status(200)
        .json({
          despesasDoMes,
          receitasDoMes,
          saldoFinalDoMes,
          listaCategorias,
        });
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }
}

module.exports = ResumosController;
