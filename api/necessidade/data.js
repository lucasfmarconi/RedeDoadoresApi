// var db = require("../../db/pgDb");
var cloudantDb = require("../../db/cloudantDb");

async function getNecessidade() {
    // return await db.necessidadeSelect(`SELECT id, descricao, nome, tipo_sanguineo, hospital FROM public.rdapi_necessidade`);
}

module.exports.getNecessidade = getNecessidade;

async function postNecessidade(necessidade) {
    // return await db.necessidadeSelect(`SELECT id, descricao, nome, tipo_sanguineo, hospital FROM public.rdapi_necessidade`);
    return await cloudantDb.insert(necessidade)
}

module.exports.postNecessidade = postNecessidade;