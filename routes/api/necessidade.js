var necessidade = require("../api/necessidade/index");

var appRouter = function (app) {
    
    app.get("/api/necessidade", function (req, res) {
        getNecessidade(req, res);
    });

    async function getNecessidade(req, res) {
        var data = await necessidade.getNecessidade();
        res.status(200).send(data);
    }

    app.post("/api/necessidade", function (req, res) {
        postNecessidade(req, res);
    });

    async function postNecessidade(req, res) {
        var data = await necessidade.postNecessidade(req);
        res.status(200).send(data);
    }
}

module.exports = appRouter;