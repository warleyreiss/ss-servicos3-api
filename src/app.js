//incluindo extensoes da biblioteca express dentro de uma variavel
const express = require('express');

// criadno uma variavel de chamada para express
const app = express();

const cors = require('cors');
require('dotenv').config();

// definindo a porta
const PORT = process.env.PORT;
// use é um midleware para qsempre que a rota for chamada
app.use(express.json()); //chama funcao do express para definir tipo de arquvivo
app.use(cors());
//models
const mongoose = require('./db/db');
const NomeDaModel = require('./models/Model');

// definindo as rotas

app.post('/create_contract', async (req, res) => {
    try {
        const { name } = req.body;
        const solicitacao = await new NomeDaModel({ name });
        solicitacao.save();
        res.send(solicitacao);
    } catch (err) {
        res.status(400).send(err);
    }

})
app.get('/list_contract', async (req, res) => {
    try {
        const solicitacoes = await NomeDaModel.find();
        res.send(solicitacoes);
        //console.log(solicitacoes);
    } catch (err) {
        res.status(400).send(err);
    }
})
app.get('/show_contract/:id', async (req, res) => {
    try {

        const valorId = req.params.id;
        const solicitacoes = await NomeDaModel.find({_id: valorId} );
        res.send(solicitacoes);
        //console.log(solicitacoes);
    } catch (err) {
        res.status(400).send(err);
    }
})
app.patch('/patch_contract/:id', async (req, res) => {
    try {
        const valorId = req.params.id;
        console.log(valorId);
        const { name } = req.body;
        const solicitacoes = await NomeDaModel.findOneAndUpdate({_id: valorId},{name}, {returnOriginal: false});
        res.send(solicitacoes);
        //console.log(solicitacoes);
    } catch (err) {
        res.status(400).send(err);
    }
})

app.listen(PORT, () => { //define a porta o que irá ocorrear quano o servidor for estartado
    console.log('servidor iniciado' + PORT)
})