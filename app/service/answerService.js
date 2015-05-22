angular.module('BreakTheCode')
    .service('AnswerService', ['$http',
        function($http) {
            var AnswerService = {};

            AnswerService.checkAnswer = function(currentAnswer, trueAnswer){

                var diff = JsDiff.diffChars(currentAnswer, trueAnswer)
                console.log(diff);
            };

            return AnswerService;
        }]);