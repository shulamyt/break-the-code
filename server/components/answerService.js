var AnswerModel = require('../db/model/answer');
module.exports = function (app) {

    app.post('/answer', function (req, res) {
        var answer = new AnswerModel({
            questionId: req.body.questionId,
            correctAnswer: req.body.correctAnswer,
            answer: req.body.answer
        });

        answer.save(function (err, answer) {
            if (err) {
                return next(answer);
            }
            res.json(201, answer);
        })

    });

};
