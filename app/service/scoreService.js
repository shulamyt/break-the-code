define([
    '../app',
	'angular'
], function(app) {
    app.service('ScoreService', ['$http',
        function($http) {
            var ScoreService = {};

            ScoreService.checkAnswer = function(currentAnswer, trueAnswer){

            };

            return ScoreService;
        }]);
});