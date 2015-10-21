define([
    '../app',
    'angular'    
], function(app) {
    app.service('UserService', ['$http', '$q',
        function($http, $q) {
            var UserService = {};
            var currentUser;

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
                currentUser = user;
                var userJSON = JSON.stringify(user);
                localStorage.setItem("user", userJSON);
            };

            UserService.getCurrentUser = function(){
                if(!currentUser){
                    var storageUser = localStorage.getItem("user");
                    if(storageUser){
                        currentUser = JSON.parse(storageUser);
                    }
                }
                return currentUser;
            };

            return UserService;
        }]);

});