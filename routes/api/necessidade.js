var necessidade = require("../../api/necessidade");
var express = require('express');
var router = express.Router();

router.get("/necessidade/:id", function (req, res) {
    getNecessidadeById(req.params.id, res);
});

async function getNecessidadeById(id, res) {
    var data = await necessidade.getNecessidadeById(id);
    res.status(200).send(data);
}

router.get("/necessidade", function (req, res) {
    getNecessidade(req.query, res);
});

async function getNecessidade(parametros, res) {
    var data = await necessidade.getNecessidade(parametros);
    res.status(200).send(data);
}

router.post("/necessidade", function (req, res) {
    postNecessidade(req, res);
});

async function postNecessidade(req, res) {
    var data = await necessidade.postNecessidade(req);
    res.status(200).send(data);
}

module.exports = router;