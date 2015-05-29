angular.module('BreakTheCode')
    .service('AnswerService', ['$http',
        function($http) {
            var AnswerService = {};

            AnswerService.save = function(answerData){
                var answerPromise = $http.post('/answer', answerData);
                return answerPromise;
            };

            return AnswerService;
        }]);