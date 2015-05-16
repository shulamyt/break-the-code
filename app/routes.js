angular.module('BreakTheCode').config(function($routeProvider){
  $routeProvider
  .when('/login', {
    templateUrl: "/login/loginTemplate.html",
    controller: "LoginController"
  })
  .when('/question', {
    templateUrl: "assets/templates/question/index.html",
    controller: "QustionContoller"
  })
});
