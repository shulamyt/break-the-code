define([
	'./app',
	'angular',
	'angularRoute',
	'login/loginController',
	'questions/questionsController'
], function(app) {
	app.config(function($routeProvider){
	  $routeProvider
	  .when('/', {
	    templateUrl: "/login/loginTemplate.html",
	    controller: "LoginController"
	  })
	  .when('/login', {
	    templateUrl: "/login/loginTemplate.html",
	    controller: "LoginController"
	  })
	  .when('/questions', {
	    templateUrl: "questions/questionsTemplate.html",
	    controller: "QuestionsController"
	  })
	});
});