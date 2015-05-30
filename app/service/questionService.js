angular.module('BreakTheCode')
    .service('QuestionService', ['$http', '$q', 'UserService',
        function($http, $q, UserService) {
            var questionService = {};
            var currentQuestion;

            questionService.getCurrentQuestion = function(){
                return currentQuestion;
            };

            questionService.setCurrentQuestion = function(question){
                currentQuestion = question;
            };

            questionService.getNextQuestionId = function(){
                var questionIndex = UserService.getNextUserQuestionIndex();
                var testPlan = UserService.getUserTestPlan();
                var nextQuestionId;
                if(questionIndex < testPlan.length){
                    nextQuestionId = testPlan[questionIndex];
                }
                return nextQuestionId;
            };

            questionService.isThereMoreQuestions = function(){
                var questionIndex = UserService.getCurrentUserQuestionIndex();
                if(questionIndex == undefined){
                    return true;
                }
                var testPlan = UserService.getUserTestPlan();
                var isThereMoreQuestions = questionIndex < testPlan.length - 1;
                return isThereMoreQuestions;
            };

            questionService.getQuestion = function(){
                var questionId = questionService.getNextQuestionId();
                var deferred = $q.defer();
                $http.get('/question/' + questionId)
                    .success(function(data) {
                        deferred.resolve(data);
                    }).error(deferred.reject);

                deferred.promise.then(function(question){
                    questionService.setCurrentQuestion(question);
                });

                return deferred.promise;
            };

            questionService.saveQuestion = function(){
                var questionId = questionService.getNextQuestionId();
                var deferred = $q.defer();
                $http.put('/question', {
                    params: { questionId: questionId }
                })
                    .success(function(data) {
                        deferred.resolve(data);
                    }).error(deferred.reject);
                return deferred.promise;
            };

            return questionService;
        }]);