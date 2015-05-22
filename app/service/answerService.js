angular.module('BreakTheCode')
    .service('AnswerService', ['$http',
        function($http) {
            var AnswerService = {};

            AnswerService.checkAnswer = function(currentAnswer, trueAnswer){

                var diff = JsDiff.diffChars(trueAnswer, currentAnswer);
                console.log(diff);
                var result = $('<span></span>');
                diff.forEach(function(part){
                    // green for additions, red for deletions
                    // grey for common parts
                    var color = part.added ? 'green' :
                        part.removed ? 'red' : 'grey';
                    var span = $('<span></span>');
                    span.css("color", color);
                    span.text(part.value);
                    result.append(span);

                });
                return result;
            };

            return AnswerService;
        }]);