define([
    'angular',
    '../app',
    '../service/questionService',
    '../service/userService',
    '../utils/utils',
    'text!./loginTemplate.html'
], function(app) {
angular.module('BreakTheCode').
    controller('LoginController', ['$scope', '$location', 'UserService', 'QuestionService',
    function($scope, $location, UserService, QuestionService) {
    var self = this;
    $scope.user = {};

    $scope.programmingLanguagesOptions = [
    'C', 'C ++', 'C#', 'java', 'JavaScript', 'python',
    'perl', 'PHP', 'Fortran', '.NET', 'SQL', 'Ruby',
    'Matlab', 'Scala', 'Haskell'
    ];

        $scope.startTheGame = function (){
            UserService.createUser($scope.user)
                .then(function(user){
                    $location.path('questions');
                    QuestionService.restartQuestionIndex();
                });

            //.error(function(data, status, headers, config) {
            //    console.log("we have a problem..");
            //    //TODO : error handling
            //});
        };
    }]);
});
