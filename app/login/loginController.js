define([
    '../app',
    'jquery',
    'angular',
    '../loginForm/loginFormDirective',
     'text!./loginTemplate.html',
    '../service/questionService',
    '../service/userService',
    '../utils/utils'
], function(app, $) {
    app.controller('LoginController', ['$scope', '$location', 'UserService', 'QuestionService',
    function($scope, $location, UserService, QuestionService) {
        $('body').find(".welcome").show();
    }]);
});
