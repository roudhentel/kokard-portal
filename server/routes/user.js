let express = require('express');
let userSvc = require('../services/user');
let jwt = require('jsonwebtoken');
const config = require('../services/config.json');

function UserRoute() {
    let router = express.Router();

    router.post('/authenticate', function (request, response) {
        // authenticate user
        var params = request.body;
        userSvc.authenticate(params, function (result) {
            if (result.details.success) {
                let token = jwt.sign(params, config.secret, {
                    expiresIn: 1200
                });
                response.status(result.status).json({
                    success: true,
                    token: token
                });
            } else {
                response.status(result.status).json(result.details);
            }
        });
    });

    router.post('/', function (request, response) {
        // add user
        var params = request.body;
        userSvc.add(params, function (result) {
            response.status(result.status).json(result.details);
        });
    });

    router.use(function (req, res, next) {
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        if (token) {
            jwt.verify(token, config.secret, function (err, decoded) {
                if (err) {
                    return res.status(500).json({
                        tokenError: true,
                        message: 'Failed to authenticate token'
                    });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.status(500).json({
                tokenError: false,
                message: 'No token provided'
            });
        }
    });

    router.get('/', function (request, response) {
        // get all users
        var params = { query: request.query.searchStr || "" };
        userSvc.get(params, function (result) {
            response.status(result.status).json(result.details);
        });
    });

    router.put('/', function (request, response) {
        // edit user
        var params = request.body;
        userSvc.edit(params, function (result) {
            response.status(result.status).json(result.details);
        });
    });

    router.delete('/', function (request, response) {
        // delete user
        var params = { Id: request.query.Id || 0 };
        userSvc.delete(params, function (result) {
            response.status(result.status).json(result.details);
        });
    });

    return router;
}

module.exports = UserRoute();