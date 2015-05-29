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
                    var className = "correct";
                    if(part.added){
                        className = "added";
                    }
                    else if(part.removed){
                        className = "removed";
                    }
                    var span = $('<span></span>');
                    span.addClass(className);
                    span.text(part.value);
                    result.append(span);

                });
                return result;
            };

            return AnswerService;
        }]);