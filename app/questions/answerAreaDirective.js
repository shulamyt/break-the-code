angular.module('BreakTheCode')
    .directive('answerArea', function() {
        return {
            restrict: 'E',
            templateUrl: 'questions/answerAreaTemplate.html',
            link: function (scope, element) {

            }
        };
    });