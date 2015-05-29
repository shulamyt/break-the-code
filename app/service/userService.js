angular.module('BreakTheCode')
    .service('UserService', ['$http',
        function($http) {
            var UserService = {};

            UserService.createUser = function(userData){
                console.log(userData);
                var userPromise = $http.post('/createUser', userData);
                return userPromise;
            };

            UserService.getCurrentUserQuestionIndex  = function(){
                var user = UserService.getCurrentUser();
                var currentQuestionIndex;
                if(user.currentQuestionIndex == undefined){
                    currentQuestionIndex = 0;
                }else{
                    currentQuestionIndex = user.currentQuestionIndex;
                }
                return currentQuestionIndex;
            };

            UserService.getNextUserQuestionIndex = function(){
                var user = UserService.getCurrentUser();
                var currentQuestionIndex = UserService.getCurrentUserQuestionIndex();
                var nextQuestionIndex = currentQuestionIndex + 1;
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