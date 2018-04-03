var db = require("../../db/postgres/index");

<<<<<<< HEAD:api/necessidade/data.js
async function get() {
    return await db.clientSelect(`SELECT id, descricao, nome, tipo_sanguineo, hospital FROM public.rdapi_necessidade`);
}

module.exports = {
    get = get,
    post = post
} 
=======
async function getNecessidade() {
    return await db.necessidadeSelect(`SELECT id, descricao, nome, tipo_sanguineo, hospital FROM public.rdapi_necessidade`);
}

module.exports.getNecessidade = getNecessidade;

async function postNecessidade() {
    return await db.necessidadeSelect(`SELECT id, descricao, nome, tipo_sanguineo, hospital FROM public.rdapi_necessidade`);
}

module.exports.postNecessidade = postNecessidade;
>>>>>>> 85592a673d712e6415fe4b46a71b05bab40fdb61:api/necessidade/necessidadeDAL.js
