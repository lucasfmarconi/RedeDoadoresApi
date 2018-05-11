var dbConfig = require("../../config/cloudantConfig");
var Cloudant = require("cloudant");
var request = require("request");
var Promise = require("promise");

//Connect using cloudant npm and URL obtained from previous step
var cloudant = Cloudant({
  url: dbConfig.dbNecessidadeConfig.url
});
//Edit this variable value to change name of database.
var dbname = dbConfig.dbNecessidadeConfig.database;
var db = cloudant.db.use(dbname);

var cloudantDb = {
  insert: function(obj) {
    return new Promise(function(fulfill, reject) {
      if (obj) {
        db.insert(obj, function(err, body) {
          if (err) {
            console.log(body);
            reject(err);
          } else {
            fulfill(body);
          }
        });
      } else {
        fulfill(obj);
      }
    });
  }
};

module.exports = cloudantDb;
