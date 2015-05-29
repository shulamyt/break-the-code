angular.module('BreakTheCode')
    .service('AnswerService', ['$http',
        function($http) {
            var AnswerService = {};

            AnswerService.checkAnswer = function(currentAnswer, trueAnswer){

                var diff = JsDiff.diffChars(trueAnswer, currentAnswer);
                var result = $('<span></span>');
                diff.forEach(function(part){
                    // yellow for additions, red for deletions
                    // green for common parts
                    var color = part.added ? 'yellow' :
                        part.removed ? 'red' : 'green';
                    var span = $('<span></span>');
                    span.css("color", color);
                    span.text(part.value);
                    result.append(span);

                });
                return result;
            };

            return AnswerService;
        }]);