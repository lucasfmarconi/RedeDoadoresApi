var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/index");
var apiApp = express();
var app = express();
var openRouter = express.Router();
var debug = require("./config/debugConfig");

apiApp.use(bodyParser.json());
apiApp.use(bodyParser.urlencoded({
  extended: true
}));

routes(apiApp);

var logger = function (req, res, next) {
  debug(req.method + ' ' + req.url);
}

app.use(logger);
app.use('/api', apiApp);

var server = app.listen('3000', function () {
  debug("API running on port.", server.address().port);
});