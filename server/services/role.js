let dbSvc = require('./database');

function RoleService() {
    let roleSvc = {
        get: function (params, callback) {
            let s = this;
            dbSvc.executeSelectProcedure("[dbo].[role_select]", params, function (err, res) {
                s.finishTransaction(err, res, callback);
            });
        },
        add: function (params, callback) {
            let s = this;
            dbSvc.executeInsertProcedure("[dbo].[role_add]", params, function (err, res) {
                s.finishTransaction(err, res, callback);
            });
        },
        edit: function (params, callback) {
            let s = this;
            dbSvc.executeInsertProcedure("[dbo].[role_edit]", params, function (err, res) {
                s.finishTransaction(err, res, callback);
            });
        },
        delete: function (params, callback) {
            let s = this;
            dbSvc.executeInsertProcedure("[dbo].[role_delete]", params, function (err, res) {
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

    return roleSvc;
}

module.exports = RoleService();