var dbUtils = require('../db/dbUtils');
var pool = require('../db/pool');

function SummaryQuestionnaireDao(){};

SummaryQuestionnaireDao.prototype.update = function(questionnaire){
    var queryStr = dbUtils.jsonToUpdateQuery(questionnaire, "Questionnaire", []);
    return dbUtils.runQuery(pool, queryStr);
};

SummaryQuestionnaireDao.prototype.save = function(questionnaire){
    var queryStr = dbUtils.jsonToInsertQuery(questionnaire, "Questionnaire", []);
    return dbUtils.runQuery(pool, queryStr);
};

var summaryQuestionnaireDao = new SummaryQuestionnaireDao();
module.exports = summaryQuestionnaireDao;