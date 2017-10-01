var summaryQuestionnaireDao = require('../dao/summaryQuestionnaireDao');
var testPlanService = require('./../services/testPlanServiceGroup');
var questionService = require('./../services/questionService');

module.exports = function (app) {

    //create
    app.post('/services/summaryQuestionnaire', function (req, res) {
        summaryQuestionnaireDao.update(req.body).then(function(questionnaire){
            res.status(200);
        });
    });

    app.put('/services/summaryQuestionnaire', function (req, res) {
        summaryQuestionnaireDao.save(req.body).then(function(questionnaire){
            res.status(200);
        });
    });


};