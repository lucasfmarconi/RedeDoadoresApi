var dal = require("./data");
var model = require("./model");

async function get() {
    var retorno = await dal.get();
    if (retorno.rowCount > 0)
        return retorno.rows;
    else {
        Console.log(retorno);
    }
}

module.exports = {
    get = get
}