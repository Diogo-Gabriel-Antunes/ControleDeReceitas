const {Router} = require('express');
const ReceitasController = require('../controllers/ReceitasController')

const router = Router()

router.get("/receitas", ReceitasController.todasReceitas)
router.get('/receitas/:id', ReceitasController.umaReceita)
router.get('/receitas/:ano/:mes', ReceitasController.todasReceitasDoMes)
router.post('/receitas', ReceitasController.criaReceitas)
router.put('/receitas/:id', ReceitasController.atualizaReceita)
router.delete('/receitas/:id', ReceitasController.deletaReceita)

module.exports = router
