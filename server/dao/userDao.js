var dbUtils = require('../db/dbUtils');
var client = require('../db/client');

function UserDao(){};

UserDao.prototype.update = function(user){
    var promise = new Promise(function(resolve, reject) {
        client.connect(function(err, client, done) {
            if(err) {
                return console.error('error fetching client from pool', err);
            }
            var query = dbUtils.jsonToUpdateQuery(user, "Experimenter", ["questions", "testPlan"]);
            client.query(query, function(err, result) {
                done();
                if(err) {
                    return console.error('error running query', err);
                }else{
                    resolve(result);
                }
            })
        });
    });
    return promise;
};

UserDao.prototype.save = function(user){
    //console.log("userDao is going to save user...");
    var promise = new Promise(function(resolve, reject) {
        //console.log("userDao is asking for connection...");
        client.connect(function(err, client, done) {
            if(err) {
                //console.log("userDao - no connection for you!");
                return console.error('error fetching client from pool', err);
            }
            //console.log("userDao has no error when ask for connection!!!!! :)");
            var query = dbUtils.jsonToInsertQuery(user, "Experimenter", ["questions", "testPlan", "groupNum"]);
            client.query(query, function(err, result) {
                done();
                if(err) {
                    return console.error('error running query', err);
                }else{
                    //console.log("userDao secssessss!!!!! :)");
                    resolve(result);
                }
            })
        });
    });
    return promise;
};

var userDao = new UserDao();
module.exports = userDao;