var dal = require("./data");
var model = require("./model");

async function getNecessidade() {
    var retorno = await dal.getNecessidade();
    if (retorno.rows.length > 0)
        return retorno.rows;
    else {
        console.log(retorno);
    }
}

module.exports.getNecessidade = getNecessidade;

async function postNecessidade(req) {
    var necessidade = req.body.data;
    var retorno = await dal.postNecessidade(necessidade);
    return retorno;
}

module.exports.postNecessidade = postNecessidade;