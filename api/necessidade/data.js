// var db = require("../../db/pgDb");
var cloudantDb = require("../../db/cloudant/cloudantDb");
var db = cloudantDb("rededoadores-necessidades");

var necessidadeModel = require("./model");

async function getNecessidadeById(id) {
    var necessidade = necessidadeModel(id=id);
    return await db.find(necessidade);
}

module.exports.getNecessidadeById = getNecessidadeById;

async function getNecessidade(necessidade) {
    return await db.find(necessidade);
}

module.exports.getNecessidade = getNecessidade;

async function postNecessidade(necessidade) {
    // return await db.necessidadeSelect(`SELECT id, descricao, nome, tipo_sanguineo, hospital FROM public.rdapi_necessidade`);
    return await db.insert(necessidade);
}

module.exports.postNecessidade = postNecessidade;