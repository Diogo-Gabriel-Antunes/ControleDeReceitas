const {Router} = require('express');
const ResumosController = require('../controllers/ResumoController')

const router = Router()


router.get('/resumo/:ano/:mes', ResumosController.resumoDoMes)


module.exports = router
