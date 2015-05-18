angular.module('BreakTheCode').config(function($routeProvider){
  $routeProvider
  .when('/login', {
    templateUrl: "/login/loginTemplate.html",
    controller: "LoginController"
  })
  .when('/questions', {
    templateUrl: "questions/questionsTemplate.html",
    controller: "QuestionsController"
  })
});
