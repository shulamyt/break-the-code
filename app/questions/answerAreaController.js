define([
	'angular',
    'app',
    '../service/questionService',
    '../service/answerService'
], function(app) {
angular.module('BreakTheCode')
    .controller('answerAreaController', ['$scope', '$rootScope', '$location', '$http', '$sce', 'QuestionService', 'AnswerService',
        function($scope, $rootScope, $location, $http, $sce, QuestionService, AnswerService) {


        }]);
});