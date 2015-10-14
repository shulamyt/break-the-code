var fs = require('fs');
var testPlanService = require('./testPlanService');

var QuestionService = function(){

    this.getQuestion = function (questionIndex){
        var promise = new Promise(function(resolve, reject) {
            testPlanService.getQuestionPath(questionIndex).then(function(questionPath){
                fs.readFile(questionPath, 'utf8', function(err, file) {
                    if(err != null){
                        reject("problem");
                    }else{
                        var name = questionPath.replace(/^.*[\\\/]/, '');
                        resolve({name: name, content : file});
                    }
                });
            });
        });
        return promise;
    };
};
var questionService = new QuestionService();
module.exports = questionService;

