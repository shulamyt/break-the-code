//http://localhost:3000/index.html#/login
angular.module('BreakTheCode')
    .controller('QuestionsController', ['$scope', '$location', '$http', 'QuestionService', 'AnswerService',
        function($scope, $location, $http, QuestionService, AnswerService) {

            $scope.finishQuestion = finishQuestion;

            function setQuestion(question){
                $scope.content = question.content;
            }

            function finishQuestion(){
                checkAnswer();
                getNextQuestion();
            }

            function checkAnswer(){
                var answer =  $scope.answer;
                if(this.currentQuestion) {
                    var trueAnswer = this.currentQuestion.answer;
                    AnswerService.checkAnswer(answer, trueAnswer);
                }
            }

            function getNextQuestion(){
                var questionPromise = QuestionService.getQuestion();
                questionPromise.success(function(question, status, headers, config) {
                    console.log("question");
                    this.currentQuestion = question;
                    setQuestion(question);
                    //TODO : error handling
                })
                    .error(function(data, status, headers, config) {
                        console.log("we have a problem..");
                        //TODO : error handling
                    });

            }




        }]);