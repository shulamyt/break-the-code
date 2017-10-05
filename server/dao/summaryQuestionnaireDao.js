var dbUtils = require('../db/dbUtils');

function SummaryQuestionnaireDao(){};

SummaryQuestionnaireDao.prototype.update = function(questionnaire){
    var queryStr = dbUtils.jsonToUpdateQuery(questionnaire, "Questionnaire", []);
    return dbUtils.runQuery(queryStr);
};

SummaryQuestionnaireDao.prototype.save = function(questionnaire){
    var queryStr = dbUtils.jsonToInsertQuery(questionnaire, "Questionnaire", []);
    return dbUtils.runQuery(queryStr);
};

var summaryQuestionnaireDao = new SummaryQuestionnaireDao();
module.exports = summaryQuestionnaireDao;