//http://localhost:3000/index.html#/login
angular.module('BreakTheCode')
    .controller('QuestionsController', ['$scope', '$location', '$http', '$sce', 'QuestionService', 'AnswerService',
        function($scope, $location, $http, $sce, QuestionService, AnswerService) {

            $scope.finishQuestion = finishQuestion;
            $scope.startNewQuestion = startNewQuestion;
            startNewQuestion();

            function startNewQuestion(){
                cleanAnswerArea();
                var questionPromise = getNextQuestion();
                questionPromise.success(function(question, status, headers, config) {
                    setQuestion(question);
                    setTimer($scope.timeForQuestion);
                    startTimer();
                }).error(function(data, status, headers, config) {
                        console.log("we have a problem..");
                        //TODO : error handling
                });
            }

            function cleanAnswerArea(){
                $scope.$emit("cleanAnswerArea");
            }

            function setQuestion(question){
                this.currentQuestion = question;
                $scope.content = question.content;
                $scope.timeForQuestion = getTimeForQuestion(question);
            }

            function getTimeForQuestion(question){
                var timeForQuestion = question.timeForQuestion;
                if(!timeForQuestion){
                    timeForQuestion = 13;
                }
                return timeForQuestion;
            }

            function finishQuestion(){
                stopTimer();
                checkAnswer();
                calcScore();
                if(isThereMoreQuestions()){
                    openPopup();
                }else{
                    gameOver();
                }

            }

            function isThereMoreQuestions(){
                //TODO
            }

            function gameOver(){
                //TODO
            }

            function calcScore(){
                //TODO
            }

            function startTimer(){
                $scope.$broadcast('timer-start');
            }

            function stopTimer(){
                $scope.$broadcast('timer-stop');
            }

            function setTimer(time){
                $scope.$broadcast('timer-set-countdown', time);
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
                return questionPromise;
            }

            $scope.$on('timer-stopped', function (event, args) {
                checkAnswer();
                openPopup();
            });

        }]);