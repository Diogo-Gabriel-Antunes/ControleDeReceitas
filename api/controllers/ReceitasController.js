const { Op } = require("sequelize");
const database = require("../models");

class ReceitasController {
  static async todasReceitas(req, res) {
    const { descricao } = req.query;
    let where = {};
    if (descricao) {
      where = {
        descricao: {
          [Op.like]: `%${descricao}%`,
        },
      };
    }
    try {
      const receitas = await database.receitas.findAll({ where });
      return res.status(200).json({ receitas });
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async criaReceitas(req, res) {
    try {
      const infosReceitas = req.body;
      const receita = await database.receitas.create(infosReceitas);
      return res.status(200).json({ receita });
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }
  static async umaReceita(req, res) {
    try {
      const { id } = req.params;
      const receita = await database.receitas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json({ receita });
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }
  static async atualizaReceita(req, res) {
    try {
      const { id } = req.params;
      const novasInfos = req.body;
      await database.receitas.update(novasInfos, { where: { id: Number(id) } });
      const receita = await database.receitas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json({ receita });
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }
  static async deletaReceita(req, res) {
    try {
      const { id } = req.params;
      await database.receitas.destroy({ where: { id: Number(id) } });
      return res
        .status(200)
        .json({ mensagem: `Receita do id ${id} foi deletado com sucesso` });
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }
  static async todasReceitasDoMes(req, res) {
    const { ano, mes } = req.params;
    const where = {
      data: {
        [Op.gte]:`${ano}-${mes}-01`,
        [Op.lte]:`${ano}-${mes}-30`
      },
    };
    try {
      const receitas = await database.receitas.findAll({ where });
      return res.status(200).json({ receitas });
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }
}

module.exports = ReceitasController;
