let express = require('express');
let dbSvc = require('../services/database');

function RoleRoute() {
    let router = express.Router();

    router.get('/', function (request, response) {
        // get all roles
        var params = [{ paramName: "query", paramValue: "r" }];
        dbSvc.executeSelectProcedure("[dbo].[role_select]", params, function (err, res) {
            response.status(200).json(res);
        });

    });

    router.post('/', function (request, response) {
        // add role
        response.status(200).json({ action: "POST" });
    });

    router.put('/', function (request, response) {
        // edit role
    });

    router.delete('/', function (request, response) {
        // delete role
    });

    return router;
}

module.exports = RoleRoute();