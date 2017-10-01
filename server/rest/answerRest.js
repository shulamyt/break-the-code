var answerDao = require('../dao/answerDao');
var questionService = require('./../services/questionService');

module.exports = function (app) {

    app.post('/services/answer', function (req, res) {
        var answer = {};
        answer.userId = req.body.userId;
        answer.questionId = req.body.questionId;
        answer.rightAnswer = req.body.rightAnswer;
        answer.userAnswer = req.body.userAnswer;
        answer.serialNumber = req.body.questionIndex;
        answer.duration = req.body.time;
        answer.skip = req.body.skip;

        answerDao.save(answer).then(function () {
            res.status(201).json(answer);
        });
    });
}
