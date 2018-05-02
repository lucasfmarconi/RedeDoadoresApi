'use strict'

const necessidade = require('./api/necessidade')

var doApiRoutes = function (app) {
    necessidade(app);
}

module.exports = doApiRoutes;