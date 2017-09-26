var dbUtils = require('../db/dbUtils');
var pool = require('../db/client');

function UserDao(){};

UserDao.prototype.update = function(user){
    var queryStr = dbUtils.jsonToUpdateQuery(user, "Experimenter", ["questions", "testPlan"]);
    return dbUtils.runQuery(pool, queryStr);
};

UserDao.prototype.save = function(user){
    var queryStr = dbUtils.jsonToInsertQuery(user, "Experimenter", ["questions", "testPlan", "groupNum"]);
    return dbUtils.runQuery(pool, queryStr);
};

var userDao = new UserDao();
module.exports = userDao;