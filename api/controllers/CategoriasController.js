const database = require('../models');

class CategoriasController{
  static async todasCategorias(req,res){
    try{
      const categorias = await database.categorias.findAll();
      return res.status(200).json({categorias})
    }catch(erro){
      return res.status(500).json(erro.message)
    }
  }

  static async criaCategoria(req,res){
    try{
      const infosCategorias = req.body;
      const categoria = await database.categorias.create(infosCategorias);
      return res.status(200).json({categoria})
    }catch(erro){
      return res.status(500).json(erro.message)
    }
  }
  static async umaCategoria(req,res){
    try{
      const {id} = req.params;
      const categoria = await database.categorias.findOne({where:{id:Number(id)}});
      return res.status(200).json({categoria})
    }catch(erro){
      return res.status(500).json(erro.message)
    }
  }
  static async atualizaCategoria(req,res){
    try{
      const {id} = req.params;
      const novasInfos = req.body;
      await database.categorias.update(novasInfos,{where:{id:Number(id)}})
      const categoria = await database.categorias.findOne({where:{id:Number(id)}})
      return res.status(200).json({categoria});
    }catch(erro){
      return res.status(500).json(erro.message)
    }
  }
  static async deletaCategoria(req,res){
    try{
      const {id} = req.params;
      await database.categorias.destroy({where:{id:Number(id)}})
      return res.status(200).json({mensagem:`categoria do id ${id} foi deletado com sucesso`});
    }catch(erro){
      return res.status(500).json(erro.message)
    }
  }
}

module.exports = CategoriasController