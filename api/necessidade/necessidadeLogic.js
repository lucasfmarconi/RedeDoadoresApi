var dal = require("./necessidadeDAL");
var model = require("./necessidadeModel");

async function getNecessidade() {
    var retorno = await dal.getNecessidade();
    if (retorno.rowCount > 0)
        return retorno.rows;
    else {
        Console.log(retorno);
    }
}

module.exports.getNecessidade = getNecessidade;

async function postNecessidade() {
    var retorno = await dal.postNecessidade();
    if (retorno.rowCount > 0)
        return retorno.rows;
    else {
        Console.log(retorno);
    }
}

module.exports.postNecessidade = postNecessidade;