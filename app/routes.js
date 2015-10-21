define([
	'./app',
	'angular',
	'angularRoute',
	'text!login/loginTemplate.html',
	'login/loginController',
	'text!questions/questionsTemplate.html',
	'questions/questionsController'
], function(app) {
	app.config(function($routeProvider){
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
	});
});