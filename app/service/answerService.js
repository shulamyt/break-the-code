angular.module('BreakTheCode')
    .service('AnswerService', ['$http', '$q', 'QuestionService', 'UserService', 'TimerService',
        function($http, $q, QuestionService, UserService, TimerService) {
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
                answer.questionId = QuestionService.getCurrentQuestion().id;
                answer.time = TimerService.getTime();
                answer.userId = UserService.getCurrentUser()._id;
                var deferred = $q.defer();
                $http.post('/answer', answer)
                    .success(function(data) {
                        deferred.resolve(data);
                    }).error(deferred.reject);
                return deferred.promise;
            };

            return AnswerService;
        }]);