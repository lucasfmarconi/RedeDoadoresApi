const { Client } = require('pg');
const dbConfig = require('../config/dbConfig');
const dbClient = new Client(dbConfig);
var Promise = require('promise');

dbClient.connect();

var pgDb = {
    necessidadeSelect: function (query, param) {
        return new Promise(function (fulfill, reject) {
            dbClient.query(query, (err, res) => {
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
    insertNecessidade: function(query, param) {
        return new Promise(function (fulfill, reject) {
            dbClient.query(query, (err, res) => {
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
    openConnection : function () { dbClient.connect(); }
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