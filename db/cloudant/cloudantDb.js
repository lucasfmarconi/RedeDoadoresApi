var dbConfig = require("../../config/cloudantConfig");
var Cloudant = require("cloudant");
var request = require("request");
var Promise = require("promise");

module.exports = function (dbName) {
  var cloudantConfig = dbConfig('rededoadores-necessidades');

  var cloudant = Cloudant({
    url: cloudantConfig.url
  });

  var dbname = cloudantConfig.database;
  var db = cloudant.db.use(dbname);

  var cloudantDb = {
    insert: function (obj) {
      return new Promise(function (fulfill, reject) {
        if (obj) {
          db.insert(obj, function (err, body) {
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
    },
    getAll: function () {
      return new Promise(function (fulfill, reject) {
        db.get("440bbee42040be0d1c5cc84a484ac3bb", function (err, data) {
          if (err) {
            reject(err);
          } else {
            fulfill(data);
          }
        });
      });
    }
  };

  return cloudantDb;
};