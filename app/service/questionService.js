angular.module('BreakTheCode')
    .service('QuestionService', ['$http', '$q', 'UserService',
        function($http, $q, UserService) {
            var questionService = {};
            var currentQuestion;
            var currentQuestionIndex = restoreCurrentQuestionIndex();

            function restoreCurrentQuestionIndex(){
                var localIndex = localStorage.getItem("currentQuestionIndex");
                if(localIndex){
                    return parseInt(localIndex);
                }
                return -1;
            }

            questionService.getCurrentQuestion = function(){
                return currentQuestion;
            };

            questionService.setCurrentQuestion = function(question){
                currentQuestion = question;
            };

            questionService.getCurrentQuestionIndex = function(){
                return currentQuestionIndex;
            };

            questionService.restartQuestionIndex = function(){
                currentQuestionIndex = -1;
            };

            questionService.increaseQuestionIndex = function(){
                currentQuestionIndex = currentQuestionIndex + 1;
                localStorage.setItem("currentQuestionIndex", currentQuestionIndex);
                return currentQuestionIndex;
            };

            questionService.getNextQuestionId = function(){
                var questionIndex = questionService.increaseQuestionIndex();
                var testPlan = UserService.getUserTestPlan();
                var nextQuestionId;
                if(questionIndex < testPlan.length){
                    nextQuestionId = testPlan[questionIndex];
                }
                return nextQuestionId;
            };

            questionService.isThereMoreQuestions = function(){
                var questionIndex = questionService.getCurrentQuestionIndex();
                var testPlan = UserService.getUserTestPlan();
                var isThereMoreQuestions = questionIndex < testPlan.length - 1;
                return isThereMoreQuestions;
            };

            questionService.getQuestion = function(){
                var promise = new Promise(function(resolve, reject) {
                    var questionIndex = questionService.increaseQuestionIndex();
                    var user = UserService.getCurrentUser();
                    var questions = user.questions;
                    var question = questions[questionIndex];
                    questionService.setCurrentQuestion(question);
                    resolve(question);
                });
                return promise;
            };

            questionService.saveQuestion = function(){
                var questionId = questionService.getNextQuestionId();
                var deferred = $q.defer();
                $http.put('/question', {
                    params: { questionId: questionId }
                })
                    .success(function(data) {
                        deferred.resolve(data);
                    }).error(function(data) {
                        deferred.reject
                    });
                return deferred.promise;
            };

            return questionService;
        }]);