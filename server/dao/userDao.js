var dbUtils = require('../db/dbUtils');
var client = require('../db/client');

function UserDao(){};

UserDao.prototype.update = function(user){
    var promise = new Promise(function(resolve, reject) {
        client.connect(function(){
            var queryStr = dbUtils.jsonToUpdateQuery(user, "Experimenter", ["questions", "testPlan"]);
            client.query(queryStr, (err, res) => {
                if (err) throw err;
                client.end();
                resolve(res);
            })
        }).catch(err => console.error('connection error', err.stack));
    });
    return promise;
};

UserDao.prototype.save = function(user){
    //console.log("userDao is going to save user...");
    var promise = new Promise(function(resolve, reject) {
        client.connect(function(){
            var queryStr = dbUtils.jsonToInsertQuery(user, "Experimenter", ["questions", "testPlan", "groupNum"]);
            client.query(queryStr, (err, res) => {
                if (err) throw err;
                client.end();
                resolve(res);
            })
        }).catch(err => console.error('connection error', err.stack));
    });
    return promise;
};

var userDao = new UserDao();
module.exports = userDao;