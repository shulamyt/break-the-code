angular.module('BreakTheCode')
    .service('UserService', ['$http',
        function($http) {
            var UserService = {};

            UserService.createUser = function(userData){
                console.log(userData);
                var userPromise = $http.post('/user', userData);
                return userPromise;
            };

            UserService.getCurrentUserQuestionIndex  = function(){
                var user = UserService.getCurrentUser();
                var currentQuestionIndex = user.currentQuestionIndex;
                return currentQuestionIndex;
            };

            UserService.getNextUserQuestionIndex = function(){
                var user = UserService.getCurrentUser();
                var currentUserQuestionIndex = UserService.getCurrentUserQuestionIndex();
                var nextQuestionIndex = 0;
                if(currentUserQuestionIndex != undefined){
                    nextQuestionIndex = currentUserQuestionIndex + 1;
                }
                user.currentQuestionIndex = nextQuestionIndex;
                UserService.setCurrentUser(user);
                return nextQuestionIndex;
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