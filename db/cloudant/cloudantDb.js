var dbConfig = require("../../config/cloudantConfig");
var Cloudant = require("@cloudant/cloudant");
var request = require("request");
var Promise = require("promise");

module.exports = function (dbName) {
  var cloudantConfig = dbConfig(dbName);

  var cloudant = Cloudant({
    url: cloudantConfig.url
  });

  var database = cloudantConfig.database;
  var db = cloudant.db.use(database);

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
    find: function (obj) {
      return new Promise(function (fulfill, reject) {
        db.find({
          "selector": obj,
          "fields": [],
          "sort": [
             {
                "_id": "asc"
             }
          ]
        }, function (err, data) {
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