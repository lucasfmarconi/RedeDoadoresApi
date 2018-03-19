var dal = require("./necessidadeDAL");
var model = require("./necessidadeModel");

async function getNecessidades() {
    var retorno = await dal.getNecessidades();
    if (retorno.rowCount > 0)
        return retorno.rows;
    else {
        Console.log(retorno);
    }
}

module.exports.getNecessidades = getNecessidades;