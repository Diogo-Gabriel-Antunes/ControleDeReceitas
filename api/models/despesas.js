'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class despesas extends Model {
   
    static associate(models) {
     
      
    }
  }
  despesas.init({
    descricao: DataTypes.STRING,
    valor: DataTypes.FLOAT,
    data: DataTypes.DATEONLY,
    categoria_id:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'despesas',
  });
  return despesas;
};