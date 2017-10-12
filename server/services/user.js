let dbSvc = require('./database');

function UserService() {
    let userSvc = {
        get: function (params, callback) {
            let s = this;
            dbSvc.executeSelectProcedure("[dbo].[user_select]", params, function (err, res) {
                s.finishTransaction(err, res, callback);
            });
        },
        add: function (params, callback) {
            let s = this;
            dbSvc.executeInsertProcedure("[dbo].[user_add]", params, function (err, res) {
                s.finishTransaction(err, res, callback);
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