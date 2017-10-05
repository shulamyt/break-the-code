var dbUtils = require('../db/dbUtils');

function UserDao(){};

UserDao.prototype.update = function(user){
    var queryStr = dbUtils.jsonToUpdateQuery(user, "Experimenter", ["questions", "testPlan"]);
    return dbUtils.runQuery(queryStr);
};

UserDao.prototype.save = function(user){
    var queryStr = dbUtils.jsonToInsertQuery(user, "Experimenter", ["questions", "testPlan", "groupNum"]);
    return dbUtils.runQuery(queryStr);
};

var userDao = new UserDao();
module.exports = userDao;