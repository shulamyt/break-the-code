define([
    '../app',
    'angular',
    './questionService',
    './userService',
    './timerService'
], function(app) {
    app.service('AnswerService', ['$http', '$q', 'QuestionService', 'UserService', 'TimerService',
        function($http, $q, QuestionService, UserService, TimerService) {
            var AnswerService = {};
            var currentAnswer;

            AnswerService.getCurrentAnswer = function(){
                return currentAnswer;
            };

            AnswerService.setCurrentAnswer = function(answer){
                currentAnswer = answer;
            };

            AnswerService.getRightAnswer = function(questionMetadata){
                var promise = new Promise(function(resolve, reject) {
                    var answer = questionMetadata.answer;
                    answer = answer.replace(/^134345234/, '');
                    resolve(answer);
                });
                return promise;
            };

            AnswerService.saveAnswer = function(answer){
                answer.questionId = QuestionService.getCurrentQuestion().id;
                answer.time = TimerService.getTime();
                answer.userId = UserService.getCurrentUser().id;
                answer.questionIndex = QuestionService.getCurrentQuestionIndex();
                var deferred = $q.defer();
                $http.post('/answer', answer)
                    .success(function(data) {
                        deferred.resolve(data);
                    }).error(deferred.reject);
                return deferred.promise;
            };

            return AnswerService;
        }]);
});