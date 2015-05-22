//http://localhost:3000/index.html#/login
angular.module('BreakTheCode')
    .controller('QuestionsController', ['$scope', '$location', '$http', '$sce', 'QuestionService', 'AnswerService',
        function($scope, $location, $http, $sce, QuestionService, AnswerService) {

            $scope.finishQuestion = finishQuestion;
            getNextQuestion();

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
                    var result = AnswerService.checkAnswer(answer, trueAnswer);
                    $scope.result = $sce.trustAsHtml(result.html());
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

            $scope.$on('timer-stopped', function (event, args) {
                alert("timer-stop!");
            });



        }]);