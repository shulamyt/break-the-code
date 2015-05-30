//http://localhost:3000/index.html#/login
angular.module('BreakTheCode').
    controller('LoginController', ['$scope', '$location', 'UserService',
    function($scope, $location, UserService) {
    var self = this;
    $scope.user = {};

        $scope.startTheGame = function (){
            UserService.createUser($scope.user)
                .then(function(user){
                    $location.path('questions');
                });

            //.error(function(data, status, headers, config) {
            //    console.log("we have a problem..");
            //    //TODO : error handling
            //});
        };
    }]);