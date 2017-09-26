var dbUtils = require('../db/dbUtils');
var client = require('../db/client');

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
};

var userDao = new UserDao();
module.exports = userDao;