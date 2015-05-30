var AnswerModel = require('../db/model/answer');
var questionService = require('./../components/questionService');

module.exports = function (app) {

    app.get('/answer/:questionId', function (req, res) {
        var questionId = req.param("questionId");
        questionService.getQuestion(questionId).then(function(data) {
            var questionMetadata = JSON.parse(data);
            var answer = questionMetadata.answer;
            res.json(201, answer);
        });
    });

    app.post('/answer', function (req, res) {
        var answer = new AnswerModel({
            questionId: req.body.questionId,
            rightAnswer: req.body.rightAnswer,
            userAnswer: req.body.userAnswer
        });

        answer.save(function (err, answer) {
            if (err) {
                return err;
            }
            res.json(201, answer);
        })

    });

};
