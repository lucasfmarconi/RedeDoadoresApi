// var db = require("../../db/pgDb");
var cloudantDb = require("../../db/cloudant/cloudantDb");
var db = cloudantDb("rededoadores-necessidades");
async function getNecessidade() {
    return await db.getAll();
}

module.exports.getNecessidade = getNecessidade;

async function postNecessidade(necessidade) {
    // return await db.necessidadeSelect(`SELECT id, descricao, nome, tipo_sanguineo, hospital FROM public.rdapi_necessidade`);
    return await db.insert(necessidade);
}

module.exports.postNecessidade = postNecessidade;