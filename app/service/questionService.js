angular.module('BreakTheCode')
    .service('QuestionService', ['$http', 'UserService',
        function($http, UserService) {
            var questionService = {};

            questionService.getNextQuestionId = function(){
                var questionIndex = UserService.getNextUserQuestionIndex();
                var testPlan = UserService.getUserTestPlan();
                var nextQuestionId;
                if(questionIndex < testPlan.length){
                    nextQuestionId = testPlan[questionIndex];
                }
                return nextQuestionId;
            };

            questionService.getQuestion = function(){
                var questionId = questionService.getNextQuestionId();
                var promise = $http.get('/question', {
                    params: { questionId: questionId }
                });
                return promise;
            }

            return questionService;
        }]);