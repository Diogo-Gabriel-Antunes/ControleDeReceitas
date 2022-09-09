'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categorias extends Model {
    
    static associate(models) {
      categorias.hasMany(models.despesas,{
        foreignKey:"categoria_id"
      })
    }
  }
  categorias.init({
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categorias',
  });
  return categorias;
};