var db = require("../../db/pgDb");

async function getNecessidades() {
    return await db.clientSelect(`SELECT id, descricao, nome, tipo_sanguineo, hospital FROM public.rdapi_necessidade`);
}

module.exports.getNecessidades = getNecessidades;