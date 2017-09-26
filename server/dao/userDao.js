var dbUtils = require('../db/dbUtils');
var client = require('../db/client');

function UserDao(){};

UserDao.prototype.update = function(user){
    var promise = new Promise(function(resolve, reject) {
        client.connect();
        var queryStr = dbUtils.jsonToUpdateQuery(user, "Experimenter", ["questions", "testPlan"]);
        client.query(queryStr)
            .then(result => resolve(result))
            .catch(e => console.error(e.stack))
            .then(() => client.end());
    });
    return promise;
};

UserDao.prototype.save = function(user){
    //console.log("userDao is going to save user...");
    var promise = new Promise(function(resolve, reject) {
        client.connect();
        var queryStr = dbUtils.jsonToInsertQuery(user, "Experimenter", ["questions", "testPlan", "groupNum"]);
        client.query(queryStr)
            .then(result => resolve(result))
            .catch(e => console.error(e.stack))
            .then(() => client.end());
    });
    return promise;
};

var userDao = new UserDao();
module.exports = userDao;