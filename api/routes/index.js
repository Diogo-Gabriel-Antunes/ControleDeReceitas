const bodyParser = require('body-parser');
const receitas = require('./ReceitasRoute')
const despesas = require('./DespesasRoute')
const categorias = require('./CategoriaRoute')
const resumo = require('./ResumoRoute')


module.exports = app =>{
  app.use(bodyParser.json())
  app.use(receitas)
  app.use(despesas)
  app.use(categorias)
  app.use(resumo)
};