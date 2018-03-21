var necessidade = require("../api/necessidade/necessidadeLogic");

var appRouter = function (app) {
    app.get("/api/necessidade", function (req, res) {
        getNecessidades(req, res);
    });

    async function getNecessidades(req, res) {
        var data = await necessidade.getNecessidades();
        res.status(200).send(data);
    }
}

module.exports = appRouter;