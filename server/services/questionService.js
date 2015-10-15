var fs = require('fs');
var testPlanService = require('./testPlanService');
var Q = require('q');

var QuestionService = function(){

    this.getQuestions = function (testPlan){
        var self = this;
        var promise = new Promise(function(resolve, reject) {
            var questions = [];
            var promises = [];
            for(var i = 0; i < testPlan.length; i++){
                promises.push(self.addQuestionMetadata(i, testPlan, questions));
            }
            Q.all(promises).then(function(){
                resolve(questions);
            });
        });
        return promise;
    };

    this.addQuestionMetadata = function (indexInTestPlan, testPlan, questionsList){
        var self = this;
        var promise = new Promise(function(resolve, reject) {
            var questionIndex = testPlan[indexInTestPlan];
            self.getQuestion(questionIndex).then(function(questionMetadata){
                questionsList[indexInTestPlan] = questionMetadata;
                resolve();
            });
        });
        return promise;
    };

    this.getQuestion = function (questionIndex){
        var promise = new Promise(function(resolve, reject) {
            testPlanService.getQuestionPath(questionIndex).then(function(questionPath){
                fs.readFile(questionPath, 'utf8', function(err, file) {
                    if(err != null){
                        reject("problem");
                    }else{
                        var questionMetadata;
                        try{
                            questionMetadata = JSON.parse(file.content);
                        }catch(err){
                            questionMetadata = {};
                            questionMetadata.id = questionIndex;
                            questionMetadata.code = file;
                            questionMetadata.name = questionPath.replace(/^.*[\\\/]/, '');
                            questionMetadata.answer = "";
                        }
                        resolve(questionMetadata);

                    }
                });
            });
        });
        return promise;
    };
};
var questionService = new QuestionService();
module.exports = questionService;

