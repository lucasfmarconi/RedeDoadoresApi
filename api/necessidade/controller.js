var dal = require("./data");
var model = require("./model");

async function getNecessidadeById(id, response) {
    var retorno = await dal.getNecessidadeById(id);
    return retorno.docs;
}

module.exports.getNecessidadeById = getNecessidadeById;


async function getNecessidade(parametros, response) {
    var necessidade = model();

    necessidade._id = parametros.id ? parametros.id : { "$gt": "0" };

    if (parametros.tipo_sanguineo) {
        necessidade.tipo_sanguineo = parametros.tipo_sanguineo;
    }

    var retorno = await dal.getNecessidade(necessidade);
    return retorno.docs;
}

module.exports.getNecessidade = getNecessidade;


async function postNecessidade(req) {
    var necessidade = req.body.data;
    var retorno = await dal.postNecessidade(necessidade);
    return retorno;
}

module.exports.postNecessidade = postNecessidade;