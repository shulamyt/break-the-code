define([
	'./app',
	'angular',
	'angularRoute',
	'text!login/loginTemplate.html',
	'login/loginController',
	'text!questions/questionsTemplate.html',
	'questions/questionsController',
	'text!explain/explainTemplate.html',
	'explain/explainController'
], function(app) {
	app.config(function($routeProvider, $locationProvider){
		$routeProvider
		.when('/', {
			templateUrl: "login/loginTemplate.html",
			controller: "LoginController"
		})
		.when('/login', {
			templateUrl: "login/loginTemplate.html",
			controller: "LoginController"
		})
		.when('/questions', {
			templateUrl: "questions/questionsTemplate.html",
			controller: "QuestionsController"
		})
		.when('/explain', {
			templateUrl: "explain/explainTemplate.html",
			controller: "ExplainController"
		})
		.otherwise({
			templateUrl: "login/loginTemplate.html",
			controller: "LoginController"
		});
	});
});