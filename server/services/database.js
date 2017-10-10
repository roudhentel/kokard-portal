const config = require('./database.json');
let sql = require('mssql');

function DatabaseService() {
    var dbSvc = {
        connect: function () {
            sql.connect(config, function (err) {
                if (err) console.log(err);

                // create Request object
                var request = new sql.Request();

                // query to the database and get the records
                request.query('select * from roles', function (err, recordset) {

                    if (err) console.log(err)

                    // send records as a response
                    console.log(recordset);

                });
            });

        }
    }

    return dbSvc;
}

module.exports = DatabaseService();