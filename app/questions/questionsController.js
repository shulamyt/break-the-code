//http://localhost:3000/index.html#/login
angular.module('BreakTheCode')
    .controller('QuestionsController', ['$scope', '$location', '$http',
        function($scope, $location, $http) {

            $scope.getQuestion = getQuestion;

            function setQuestion(question){
                $scope.content = question.content;
            }
            function getQuestion(){
                $http.get('/question')
                    .success(function(question, status, headers, config) {
                        console.log("question");
                        setQuestion(question);
                        //TODO : error handling
                    })
                    .error(function(data, status, headers, config) {
                        console.log("we have a problem..");
                        //TODO : error handling
                    });
            }




        }]);