const { Client } = require('pg');
const dbConfig = require('../../config/dbConfig');
const clientConfig = new Client(dbConfig);
var Promise = require('promise');

clientConfig.connect();

var pgDb = {
    clientSelect: function (query, param) {
        return new Promise(function (fulfill, reject) {
            clientConfig.query(query, (err, res) => {
                if(err){
                    console.log(err);
                    reject(err);                    
                } else {
                    console.log(query);
                    console.log("Rows affected: " + res.rowCount);
                    fulfill(res);
                }
            });
        });
    },
    openConnection : function () { clientConfig.connect(); }
};

module.exports = pgDb;