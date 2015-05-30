var beautify_js = require('js-beautify').js;
var questionService = require('./../services/questionService');

module.exports = function (app) {
    app.get('/question/:questionId', function (req, res) {
        var questionId = req.param("questionId");
        questionService.getQuestion(questionId).then(function(data) {
            var questionMetadata = JSON.parse(data);
            var beautifulCode = beautify_js(questionMetadata.code);
            var question = questionMetadata;
            delete question.answer;
            question.content = beautifulCode;
            res.json(201, question);
        });
    });
};
