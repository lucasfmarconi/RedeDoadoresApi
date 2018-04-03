'use strict'

const necessidade = require('./api/necessidade')

function doApiRoutes(app) {
    necessidade(app);
}

module.exports = doApiRoutes;