var dbUtils = require('../db/dbUtils');
var pool = require('../db/client');

function UserDao(){};

UserDao.prototype.update = function(user){
    var promise = new Promise(function(resolve, reject) {
        // client.connect();
        var queryStr = dbUtils.jsonToUpdateQuery(user, "Experimenter", ["questions", "testPlan"]);
        client.connect(err => {
            if (err) {
                console.error(err.stack);
                return;
            }
            client.query(queryStr, [], (err, data) => {
                if (err) {
                    console.error(err.stack);
                    client.end();
                } else {
                    client.end();
                    resolve(data);
                }
            });
        });
        //client.query(queryStr)
            // .then(result => resolve(result))
            // .catch(e => console.error(e.stack))
            // .then(() => client.end());
    });
    return promise;
};

UserDao.prototype.save = function(user){
    var queryStr = dbUtils.jsonToUpdateQuery(user, "Experimenter", ["questions", "testPlan"]);
    return new Promise(function(resolve, reject) {
        pool.connect((err, client, release) => {
            if (err) {
                return console.error('Error acquiring client', err.stack);
            }
            client.query(queryStr, (err, result) => {
                release();
                if (err) {
                    return console.error('Error executing query', err.stack);
                }
                resolve(result.rows);
            })
        })
    });
};

var userDao = new UserDao();
module.exports = userDao;