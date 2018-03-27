var db = require("../../db/pgDb");

async function getNecessidade() {
    return await db.necessidadeSelect(`SELECT id, descricao, nome, tipo_sanguineo, hospital FROM public.rdapi_necessidade`);
}

module.exports.getNecessidade = getNecessidade;

async function postNecessidade() {
    return await db.necessidadeSelect(`SELECT id, descricao, nome, tipo_sanguineo, hospital FROM public.rdapi_necessidade`);
}

module.exports.postNecessidade = postNecessidade;