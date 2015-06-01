angular.module('BreakTheCode')
    .service('UserService', ['$http', '$q',
        function($http, $q) {
            var UserService = {};

            UserService.createUser = function(userData){
                var deferred = $q.defer();
                $http.post('/user', userData)
                    .success(function(data) {
                        deferred.resolve(data);
                    }).error(deferred.reject);
                deferred.promise.then(function(user){
                    UserService.setCurrentUser(user);
                });
                return deferred.promise;
            };

            UserService.getUserTestPlan = function(){
                var user = UserService.getCurrentUser();
                return user.testPlan;
            };


            UserService.setCurrentUser = function(user){
                var userJSON = JSON.stringify(user);
                localStorage.setItem("user", userJSON);
            };

            UserService.getCurrentUser = function(){
                var userJSON = localStorage.getItem("user");
                var user = JSON.parse(userJSON);
                return user;
            };

            return UserService;
        }]);