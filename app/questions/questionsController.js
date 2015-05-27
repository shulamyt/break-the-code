//http://localhost:3000/index.html#/login
angular.module('BreakTheCode')
    .controller('QuestionsController', ['$scope', '$location', '$http', '$sce', 'QuestionService', 'AnswerService',
        function($scope, $location, $http, $sce, QuestionService, AnswerService) {

            $scope.finishQuestion = finishQuestion;
            $scope.continueTest = continueTest;
            $scope.countdownVal = 40;
            getNextQuestion();

            function continueTest(){
                getNextQuestion();
                startTimer();
            }

            function setQuestion(question){
                $scope.content = question.content;
                $scope.timeForQuestion = getTimeForQuestion(question);
            }

            function getTimeForQuestion(question){
                var timeForQuestion = question.timeForQuestion;
                if(!timeForQuestion){
                    timeForQuestion = 30;
                }
                return timeForQuestion;
            }

            function finishQuestion(){
                stopTimer();
                checkAnswer();
                openPopup();
            }


            function startTimer(){
                $scope.$broadcast('timer-start');
            }

            function stopTimer(){
                $scope.$broadcast('timer-stop');
            }

            function openPopup(){
                $scope.$emit("openPopup");
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
                checkAnswer();
                openPopup();
            });
        }]);