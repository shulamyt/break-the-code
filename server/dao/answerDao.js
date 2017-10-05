var dbUtils = require('../db/dbUtils');

function AnswerDao(){};

AnswerDao.prototype.save = function(answer){
    var queryStr = dbUtils.jsonToInsertQuery(answer, "Answer");
    return dbUtils.runQuery(queryStr);
};

var answerDao = new AnswerDao();
module.exports = answerDao;