var fs = require('fs');
var testPlanService = require('./testPlanService');
var Q = require('q');

var QuestionService = function(){

    this.addQuestion =  function (questionInfo) {
        var promise = new Promise(function(resolve, reject) {
            var questionPath = __dirname + "/../../questions/" + questionInfo.path;
            fs.readFile(questionPath, 'utf8', function(err, file) {
                if(err != null){
                    reject("problem");
                }else{
                    questionInfo.code = file;
                    resolve();
                }
            });
        });
        return promise;
    };

    this.addQuestions = function (testPlan) {
        var self = this;
        var promise = new Promise(function(resolve, reject) {
            var promises = [];
            for(var questionInfo of testPlan){
                promises.push(self.addQuestion(questionInfo));
            }
            Q.all(promises).then(function(){
                resolve(testPlan);
            });
        });
        return promise;
    };
};
var questionService = new QuestionService();
module.exports = questionService;

