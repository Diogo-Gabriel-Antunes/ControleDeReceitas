const { Op } = require('sequelize');
const database = require('../models');

class DespesasController{
  static async todasDespesas(req,res){
    const {descricao} = req.query
    let where = {}
    if(descricao){
      where = {descricao:{
        [Op.like]: `%${descricao}%`
      }}
    }
    try{
      const despesas = await database.despesas.findAll({where});
      return res.status(200).json({despesas})
    }catch(erro){
      return res.status(500).json(erro.message)
    }
  }

  static async criaDespesas(req,res){
    try{
      const infosDespesas = req.body;
      const despesa = await database.despesas.create(infosDespesas);
      return res.status(200).json({despesa})
    }catch(erro){
      return res.status(500).json(erro.message)
    }
  }
  static async umaDespesa(req,res){
    try{
      const {id} = req.params;
      const despesa = await database.despesas.findOne({where:{id:Number(id)}});
      return res.status(200).json({despesa})
    }catch(erro){
      return res.status(500).json(erro.message)
    }
  }
  static async atualizaDespesa(req,res){
    try{
      const {id} = req.params;
      const novasInfos = req.body;
      await database.despesas.update(novasInfos,{where:{id:Number(id)}})
      const despesa = await database.despesas.findOne({where:{id:Number(id)}})
      return res.status(200).json({despesa});
    }catch(erro){
      return res.status(500).json(erro.message)
    }
  }
  static async deletaDespesa(req,res){
    try{
      const {id} = req.params;
      await database.despesas.destroy({where:{id:Number(id)}})
      return res.status(200).json({mensagem:`despesa do id ${id} foi deletado com sucesso`});
    }catch(erro){
      return res.status(500).json(erro.message)
    }
  }
  static async todasDespesasDoMes(req, res) {
    const { ano, mes } = req.params;
    const where = {
      data: {
        [Op.gte]:`${ano}-${mes}-01`,
        [Op.lte]:`${ano}-${mes}-30`
      },
    };
    try {
      const despesas = await database.despesas.findAll({ where });
      return res.status(200).json({ despesas });
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }
}

module.exports = DespesasController