var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var necessidadeRoutes = require("./routes/necessidade.js");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);
necessidadeRoutes(app);

var server = app.listen(3000, function() {
  console.log("API running on port.", server.address().port);
});
