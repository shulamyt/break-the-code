var dbUtils = require('../db/dbUtils');
var pool = require('../db/pool');

function AnswerDao(){};

AnswerDao.prototype.save = function(answer){
    var queryStr = dbUtils.jsonToInsertQuery(answer, "Answer");
    return dbUtils.runQuery(pool, queryStr);
};

var answerDao = new AnswerDao();
module.exports = answerDao;