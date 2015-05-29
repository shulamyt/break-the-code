angular.module('BreakTheCode')
    .directive('answerArea', function() {
        return {
            restrict: 'E',
            templateUrl: 'questions/answerAreaTemplate.html',
            link: function (scope, element) {
                scope.$on('cleanAnswerArea', function (event, args) {
                    //var textarea = $(element).find('textarea');
                    //textarea.val('');
                    scope.answer = "";
                });
            }
        };
    });