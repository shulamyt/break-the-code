var AnswerModel = require('../db/model/answer');
var questionService = require('./../services/questionService');

module.exports = function (app) {

    app.get('/answer/:questionId', function (req, res) {
        var questionId = req.params.questionId;
        questionService.getQuestion(questionId).then(function(data) {
            var questionMetadata = JSON.parse(data);
            var answer = questionMetadata.answer;
            res.status(201).json(answer);
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
            res.status(201).json(answer);
        })

    });

};
