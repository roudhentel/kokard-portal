const config = require('./database.json');
let sql = require('mssql');

function DatabaseService() {
    var dbSvc = {
        executeProcedure: function (procname, params, callback) {
            let connection = new sql.ConnectionPool(config);
            connection.connect(function (error) {
                var request = new sql.Request(connection);

                // params.forEach(el => {
                //     request.input(el.paramName, el.paramValue);
                // });

                for (let prop in params) {
                    request.input(prop, params[prop]);
                }

                request.execute(procname, function (err, rs) {
                    callback(err, rs);
                    connection.close();
                });
            });
        },
        executeSelectProcedure: function (procname, params, callback) {
            let s = this;
            s.executeProcedure(procname, params, function (err, rs) {
                callback(err, rs["recordset"]);
            });
        },
        executeInsertProcedure: function (procname, params, callback) {
            let s = this;
            s.executeProcedure(procname, params, function (err, rs) {
                callback(err, rs["recordset"]);
            });
        },
        executeUpdateProcedure: function (procname, params, callback) {
            let s = this;
            s.executeProcedure(procname, params, function (err, rs) {
                callback(err, rs["recordset"]);
            });
        },
        executeDeleteProcedure: function (procname, params, callback) {
            let s = this;
            s.executeProcedure(procname, params, function (err, rs) {
                callback(err, rs["recordset"]);
            });
        }
    }

    return dbSvc;
}

module.exports = DatabaseService();