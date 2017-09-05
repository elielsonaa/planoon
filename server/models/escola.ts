import * as mongoose from 'mongoose';

const escolaSchema = new mongoose.Schema({

    cod_escola_inep: { type: String, unique: true,trim: true },
    estado: String,
    cod_ibge_uf: Number,
    cod_municipio: Number,
    municipio: String,
    nome_escola: String,

});

const Escola = mongoose.model('Escola', escolaSchema);

export default Escola;

