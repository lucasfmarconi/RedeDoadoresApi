var necessidade = require("../../api/necessidade/index");

var appRouter = function (app) {
    
    app.get("/necessidade", function (req, res) {
        get(req, res);
    });

    async function get(req, res) {
        var data = await necessidade.get();
        res.status(200).send(data);
    };

    app.post("/necessidade", function (req, res) {
        post(req, res);
    });

    async function post(req, res) {
        var data = await necessidade.post(req);
        res.status(200).send(data);
    };
}

module.exports = appRouter;