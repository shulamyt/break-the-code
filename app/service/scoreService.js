define([
	'angular',
    '../app'
], function(app) {
angular.module('BreakTheCode')
    .service('ScoreService', ['$http',
        function($http) {
            var ScoreService = {};

            ScoreService.checkAnswer = function(currentAnswer, trueAnswer){

            };

            return ScoreService;
        }]);
    });