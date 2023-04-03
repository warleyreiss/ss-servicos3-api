// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/testar');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const nomeSchema = new mongoose.Schema({
    name: String
});


const NomeDaModel = mongoose.model('NomeDaModel', nomeSchema);

const solicitacao = new NomeDaModel({ name: 'conteudo2' });

solicitacao.save();

const solicitacoes =  NomeDaModel.find();
console.log(solicitacoes);