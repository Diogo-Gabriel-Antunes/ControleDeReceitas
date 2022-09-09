const {Router} = require('express');
const CategoriasController = require('../controllers/CategoriasController')

const router = Router()


router.get("/categorias", CategoriasController.todasCategorias)
router.get('/categorias/:id', CategoriasController.umaCategoria)
router.post('/categorias', CategoriasController.criaCategoria)
router.put('/categorias/:id', CategoriasController.atualizaCategoria)
router.delete('/categorias/:id', CategoriasController.deletaCategoria)

module.exports = router
