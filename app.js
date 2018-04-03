var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var necessidadeRoutes = require("./routes/necessidade.js");
var swagger = require("swagger-node-express");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

swagger.addValidator(
  function validate(req, path, httpMethod) {
    //  example, only allow POST for api_key="special-key" 
    if ("POST" == httpMethod || "DELETE" == httpMethod || "PUT" == httpMethod) {
      var apiKey = req.headers["api_key"];
      if (!apiKey) {
        apiKey = url.parse(req.url,true).query["api_key"];
      }
      if ("special-key" == apiKey) {
        return true; 
      }
      return false;
    }
    return true;
  }
);

swagger.setAppHandler(app);
routes(app);
necessidadeRoutes(app);

var server = app.listen(3000, function() {
  console.log("API running on port.", server.address().port);
});
