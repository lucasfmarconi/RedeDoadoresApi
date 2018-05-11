var necessidade = require("../../api/necessidade");
var express = require('express');
var router = express.Router();

router.get("/necessidade", function (req, res) {
    getNecessidade(req, res);
});

async function getNecessidade(req, res) {
    var data = await necessidade.getNecessidade();
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