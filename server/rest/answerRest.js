var AnswerModel = require('../db/model/answer');
var questionService = require('./../services/questionService');

module.exports = function (app) {

    app.post('/answer', function (req, res) {
        var answer = new AnswerModel({
            userId: req.body.userId,
            questionId: req.body.questionId,
            rightAnswer: req.body.rightAnswer,
            userAnswer: req.body.userAnswer,
            questionIndex: req.body.questionIndex,
            time: req.body.time
        });

        answer.save(function (err, answer) {
            if (err) {
                return err;
            }
            res.status(201).json(answer);
        })

    });

};
