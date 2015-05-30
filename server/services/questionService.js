var readFile = require('fs-readfile-promise');

var QuestionService = function(){

    this.getQuestion = function (questionId){
        var filePath = __dirname + "/../../questions/" + questionId + ".json";
        var file = readFile(filePath);
        return file;
    };
};
var questionService = new QuestionService();
module.exports = questionService;

