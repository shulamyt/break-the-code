define([
    '../app',
    'angular',
    './answerAreaController',
    'text!./answerAreaTemplate.html'
], function(app) {
    app.directive('answerArea', function() {
        return {
            restrict: 'E',
            templateUrl: 'questions/answerAreaTemplate.html',
            controller : "answerAreaController",
            link: function (scope, element) {
                scope.$on('cleanAnswerArea', function (event, args) {
                    scope.answer = "";
                });
            }
        };
    });
});