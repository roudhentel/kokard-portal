let dbSvc = require('./database');
let bcrypt = require('bcrypt');
const saltRounds = 10;

function UserService() {
    let userSvc = {
        get: function (params, callback) {
            let s = this;
            dbSvc.executeSelectProcedure("[dbo].[user_select]", params, function (err, res) {
                s.finishTransaction(err, res, callback);
            });
        },
        authenticate: function (params, callback) {
            let s = this;
            let newParams = {
                username: params.username
            };
            dbSvc.executeSelectProcedure("[dbo].[user_authenticate]", newParams, function (err, res) {
                if (err) {
                    s.finishTransaction(err, res, callback);
                } else {
                    if (res.length > 0) {
                        bcrypt.compare(params.password, res[0]["Password"], function (err, isSame) {
                            if (isSame) {
                                let user = res[0];
                                delete user["Password"];
                                s.finishTransaction(undefined, { authenticated: true, user: user }, callback);
                            } else {
                                s.finishTransaction({ "message": "Invalid username or password" }, undefined, callback);
                            }
                        });
                    } else {
                        s.finishTransaction({ "message": "Invalid username or password" }, undefined, callback);
                    }
                }
            });
        },
        add: function (params, callback) {
            let s = this;
            bcrypt.genSalt(saltRounds, function (err, salt) {
                bcrypt.hash(params.Password, salt, function (err, hash) {
                    if (err) {
                        s.finishTransaction(err, undefined, callback);
                    } else {
                        params.Password = hash;
                        dbSvc.executeInsertProcedure("[dbo].[user_add]", params, function (err, res) {
                            s.finishTransaction(err, res, callback);
                        });
                    }
                });
            });
        },
        edit: function (params, callback) {
            let s = this;
            dbSvc.executeInsertProcedure("[dbo].[user_edit]", params, function (err, res) {
                s.finishTransaction(err, res, callback);
            });
        },
        delete: function (params, callback) {
            let s = this;
            dbSvc.executeInsertProcedure("[dbo].[user_delete]", params, function (err, res) {
                s.finishTransaction(err, res, callback);
            });
        },
        finishTransaction: function (err, res, callback) {
            if (err) {
                callback({
                    details: {
                        success: false,
                        error: err
                    },
                    status: 500
                });
            } else {
                callback({
                    details: {
                        success: true,
                        rows: res
                    },
                    status: 200
                });
            }
        }
    }

    return userSvc;
}

module.exports = UserService();