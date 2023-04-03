
const mongoose  = require('../db/db');



const nomeSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    createdAt:{
        type: Date,
        default:Date.now()
    }

});

const NomeDaModel = mongoose.model('NomeDaModel', nomeSchema);



module.exports = NomeDaModel