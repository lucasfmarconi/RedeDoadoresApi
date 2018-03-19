const { Client } = require('pg');
const dbConfig = require('../config/dbConfig');
const client = new Client(dbConfig);
var Promise = require('promise');

client.connect();

var pgDb = {
    clientSelect: function (query, param) {
        return new Promise(function (fulfill, reject) {
            client.query(query, (err, res) => {
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
    openConnection : function () { client.connect(); }
};

// process.on('uncaughtException', function (err) {
//     console.error('Uncaught exception ', err);
//     client.end();
// });

// process.on('beforeExit', function () {
//     client.end();
//     console.error('PostgreSQL connection closed. Proccess exiting.');
// });

// process.on('SIGTERM', function () {
//     console.log('Received SIGTERM');
//     client.end();
// });

// process.on('SIGINT', function () {
//     console.log('Received SIGINT');
//     client.end();
// });

module.exports = pgDb;