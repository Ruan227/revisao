const mongoose = require('mongoose')

const schema =  mongoose.Schema({
    nome: String,
    turma: String,
    notas: [ Number]
})

const Aluno = mongoose.model('Aluno', schema)

module.exports = Aluno