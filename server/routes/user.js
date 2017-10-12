let express = require('express');
let userSvc = require('../services/user');

function UserRoute() {
    let router = express.Router();

    router.get('/', function (request, response) {
        // get all users
        var params = { query: request.query.searchStr || "" };
        userSvc.get(params, function (result) {
            response.status(result.status).json(result.details);
        });
    });

    router.post('/', function (request, response) {
        // add user
        var params = request.body.params;
        userSvc.add(params, function (result) {
            response.status(result.status).json(result.details);
        });
    });

    router.put('/', function (request, response) {
        // edit user
        var params = request.body.params;
        userSvc.edit(params, function (result) {
            response.status(result.status).json(result.details);
        });
    });

    router.delete('/', function (request, response) {
        // delete user
        var params = { id: request.query.id || 0 };
        userSvc.delete(params, function (result) {
            response.status(result.status).json(result.details);
        });
    });

    return router;
}

module.exports = UserRoute();