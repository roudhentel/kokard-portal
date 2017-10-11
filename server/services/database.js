const config = require('./database.json');
let sql = require('mssql');

function DatabaseService() {
    var dbSvc = {
        executeSelectProcedure: function (procname, params, callback) {
            let connection = new sql.ConnectionPool(config);
            connection.connect(function (error) {
                var request = new sql.Request(connection);
                params.forEach(el => {
                    request.input(el.paramName, el.paramValue);
                });

                request.execute(procname, function (err, rs) {
                    callback(err, rs["recordset"]);
                    connection.close();
                });
            });
        },
        executeInsertProcedure: function (proccname, params, callback) {
            let connection = new sql.ConnectionPool(config);
            connection.connect(function (error) {
                var request = new sql.Request(connection);
                params.forEach(el => {
                    request.input(el.paramName, el.paramValue);
                });

                request.execute(procname, function (err, rs) {
                    callback(err, rs);
                    connection.close();
                });
            });
        }
    }

    return dbSvc;
}

module.exports = DatabaseService();