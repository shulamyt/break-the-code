//http://localhost:3000/index.html#/login
angular.module('BreakTheCode').controller('LoginController', ['$scope', '$location', '$http', function($scope, $location, $http) {
    var self = this;
    $scope.user = {};

    $scope.startTheGame = function (){
        self.createUser($scope.user);
    };

    this.createUser = function(user){
        console.log(user);
        //$location.path('qustion');
        $http.post('/createUser', user).
            success(function(data, status, headers, config) {
                console.log(data);
                console.log(status);
                // this callback will be called asynchronously
                // when the response is available
            }).
            error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
    };


}]);