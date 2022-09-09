const {Router} = require('express');
const DespesasController = require('../controllers/DespesasController')

const router = Router()

router.get("/despesas", DespesasController.todasDespesas)
router.get('/despesas/:id', DespesasController.umaDespesa)
router.get('/despesas/:ano/:mes', DespesasController.todasDespesasDoMes)
router.post('/despesas', DespesasController.criaDespesas)
router.put('/despesas/:id', DespesasController.atualizaDespesa)
router.delete('/despesas/:id', DespesasController.deletaDespesa)

module.exports = router
