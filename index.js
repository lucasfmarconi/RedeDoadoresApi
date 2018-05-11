var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var debug = require("./config/debugConfig");
// var url = require("url")
// var swagger = require("swagger-node-express");

var necessidadeRoutes = require("./routes/api/necessidade");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


var logger = function (req, res, next) {
    debug(req.method + ' ' + req.url);
    next();
}

app.use(logger);
app.use('/api', necessidadeRoutes);
// swagger.setAppHandler(app);

var server = app.listen('3000', function () {
    debug("API running on port.", server.address().port);
});