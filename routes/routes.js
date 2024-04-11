const express = require('express')
const router = express.Router()
const aluno = require('../models/Aluno')
const AlunoController = require('../controllers/AlunoController')


router.get('/', function (req, res) {
    res.json({})
})

router.get('/aluno', (req, res) => AlunoController.getAll(req, res))
router.post('/aluno', (req, res) => AlunoController.create(req, res))
router.get('/aluno/:id', (req, res) => AlunoController.get(req, res))
router.delete('/aluno/:id', (req, res) => AlunoController.delete(req, res))
router.put('/aluno/:id', (req, res) => AlunoController.update(req, res))


module.exports = router