let express = require('express');
let roleSvc = require('../services/role');

function RoleRoute() {
    let router = express.Router();

    router.get('/', function (request, response) {
        // get all roles
        var params = { query: request.query.searchStr || "" };
        roleSvc.get(params, function (result) {
            response.status(result.status).json(result.details);
        });
    });

    router.post('/', function (request, response) {
        // add role
        var params = request.body;
        roleSvc.add(params, function (result) {
            response.status(result.status).json(result.details);
        });
    });

    router.put('/', function (request, response) {
        // edit role
        var params = request.body;
        roleSvc.edit(params, function (result) {
            response.status(result.status).json(result.details);
        });
    });

    router.delete('/', function (request, response) {
        // delete role
        var params = { Id: request.query.Id || 0 };
        roleSvc.delete(params, function (result) {
            response.status(result.status).json(result.details);
        });
    });

    return router;
}

module.exports = RoleRoute();