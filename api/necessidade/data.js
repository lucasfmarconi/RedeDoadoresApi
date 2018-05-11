// var db = require("../../db/pgDb");
var cloudantDb = require("../../db/cloudant/cloudantDb");

async function getNecessidade() {
    console.log("Reading document 'rededoadores-necessidades'");
    cloudantDb.get('rededoadores-necessidades', function (err, data) {
        console.log('Error:', err);
        console.log('Data:', data);
        // keep a copy of the doc so we know its revision token
        doc = data;
        callback(err, data);
    });

}

module.exports.getNecessidade = getNecessidade;

async function postNecessidade(necessidade) {
    // return await db.necessidadeSelect(`SELECT id, descricao, nome, tipo_sanguineo, hospital FROM public.rdapi_necessidade`);
    return await cloudantDb.insert(necessidade)
}

module.exports.postNecessidade = postNecessidade;