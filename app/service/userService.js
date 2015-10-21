define([
    '../app',
    'angular'    
], function(app) {
    app.service('UserService', ['$http', '$q',
        function($http, $q) {
            var UserService = {};
            var currentUser;

            UserService.createUser = function(userData){
                var promise = new Promise(function(resolve, reject) {
                    $http.post('/user', userData)
                    .success(function(user) {
                        resolve(user);
                        UserService.setCurrentUser(user);
                    })
                    .error(function(err) {
                        reject(err);
                    });
                });
                return promise;
            };

            UserService.updateUser = function(userData){
                var promise = new Promise(function(resolve, reject) {
                    $http.put('/user', userData)
                    .success(function(data) {
                        resolve(data);
                    })
                    .error(function(err) {
                        reject(err);
                    });
                });
                return promise;
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