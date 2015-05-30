angular.module('BreakTheCode')
    .service('AnswerService', ['$http', '$q', 'QuestionService',
        function($http, $q, QuestionService) {
            var AnswerService = {};
            var currentAnswer;

            AnswerService.getCurrentAnswer = function(){
                return currentAnswer;
            };

            AnswerService.setCurrentAnswer = function(answer){
                currentAnswer = answer;
            };

            AnswerService.getRightAnswer = function(questionId){
                var deferred = $q.defer();
                $http.get('/answer/'+ questionId)
                    .success(function(data) {
                        deferred.resolve(data);
                    }).error(deferred.reject);
                return deferred.promise;
            };

            AnswerService.saveAnswer = function(answer){
                var question = QuestionService.getCurrentQuestion();
                answer.questionId = question.id;

                var deferred = $q.defer();
                $http.post('/answer', answer)
                    .success(function(data) {
                        deferred.resolve(data);
                    }).error(deferred.reject);
                return deferred.promise;
            };

            return AnswerService;
        }]);