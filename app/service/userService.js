angular.module('BreakTheCode')
    .service('UserService', ['$http',
        function($http) {
            var userService = {};

            userService.createUser = function(userData){
                console.log(userData);
                //$location.path('qustion');
                $http.post('/createUser', userData)
                    .success(function(user, status, headers, config) {
                        console.log(user);
                        console.log(status);
                        userService.setCurrentUser(user);
                    })
                    .error(function(data, status, headers, config) {
                        console.log("we have a problem..");
                        //TODO : error handling
                    });
            };

            userService.setCurrentUser = function(user){
                var userJSON = JSON.stringify(user);
                localStorage.setItem("user", userJSON);
            };

            userService.getCurrentUser = function(){
                localStorage.getItem("user", user);
            };

            return userService;
        }]);