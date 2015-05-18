//http://localhost:3000/index.html#/login
angular.module('BreakTheCode').
    controller('LoginController', ['$scope', '$location', '$http', '$element',
    function($scope, $location, $http, $element) {
    var self = this;
    $scope.user = {};

    $scope.startTheGame = function (){
        self.createUser($scope.user);
    };

    this.createUser = function(user){
        console.log(user);
        //$location.path('qustion');
        $http.post('/createUser', user)
            .success(function(data, status, headers, config) {
                console.log(data);
                console.log(status);
                //TODO : save the user on session
                $location.path('questions');
            })
            .error(function(data, status, headers, config) {
                console.log("we have a problem..");
                //TODO : error handling
            });


    };


}]);