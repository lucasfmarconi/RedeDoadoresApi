var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/index");
var apiApp = express();
var app = express();
var debug = require("./config/debugConfig");

apiApp.use(bodyParser.json());
apiApp.use(bodyParser.urlencoded({
  extended: true
}));

routes(apiApp);

var logger = function (req, res, next) {
  debug(req.method + ' ' + req.url);
}

var express = require("express")
 , url = require("url")
 , swagger = require("swagger-node-express");

 
 app.use(logger);
 app.use('/api', apiApp);
 swagger.setAppHandler(app);

var server = app.listen('3000', function () {
  debug("API running on port.", server.address().port);
});