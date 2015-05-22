angular.module('BreakTheCode')
    .service('UserService', ['$http',
        function($http) {
            var UserService = {};

            UserService.createUser = function(userData){
                console.log(userData);
                //$location.path('qustion');
                $http.post('/createUser', userData)
                    .success(function(user, status, headers, config) {
                        console.log(user);
                        console.log(status);
                        UserService.setCurrentUser(user);
                    })
                    .error(function(data, status, headers, config) {
                        console.log("we have a problem..");
                        //TODO : error handling
                    });
            };

            UserService.getNextUserQuestionIndex = function(){
                var user = UserService.getCurrentUser();
                var currentQuestionIndex;
                if(user.currentQuestionIndex == undefined){
                    currentQuestionIndex = 0;
                }else{
                    currentQuestionIndex = user.currentQuestionIndex + 1;
                }
                user.currentQuestionIndex = currentQuestionIndex;
                UserService.setCurrentUser(user);
                return currentQuestionIndex;
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