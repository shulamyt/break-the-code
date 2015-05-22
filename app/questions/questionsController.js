//http://localhost:3000/index.html#/login
angular.module('BreakTheCode')
    .controller('QuestionsController', ['$scope', '$location', '$http', 'QuestionService',
        function($scope, $location, $http, QuestionService) {

            $scope.getQuestion = getQuestion;

            function setQuestion(question){
                $scope.content = question.content;
            }
            function getQuestion(){
                var question = QuestionService.getQuestion();
                question.success(function(question, status, headers, config) {
                    console.log("question");
                    setQuestion(question);
                    //TODO : error handling
                })
                    .error(function(data, status, headers, config) {
                        console.log("we have a problem..");
                        //TODO : error handling
                    });
                setQuestion(question);
            }




        }]);