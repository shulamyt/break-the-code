var beautify_js = require('js-beautify').js;
var questionService = require('./../services/questionService');

module.exports = function (app) {
    app.get('/services/question/:questionId', function (req, res) {
        var questionId = req.params.questionId;
        questionService.getQuestion(questionId).then(function(question) {
            var beautifulCode = beautify_js(question.code);
            question.answer = "134345234" + question.answer;
            question.content = beautifulCode;
            res.status(201).json(question);
        }, function(error){
            console.log(error);
        });
    });
};
