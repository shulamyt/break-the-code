define([
    '../app',
    'jquery',
    'angular',
    'angularTimer',
    '../service/questionService',
    '../service/timerService',
    './answerAreaDirective',
    './codeAreaDirective',
    '../questionSummary/summaryDirective',
    '../gameOver/gameOverDirective'
], function(app, $) {
    app.controller('QuestionsController', ['$scope', '$location', '$http', '$sce', 'QuestionService', 'TimerService',
        function($scope, $location, $http, $sce, QuestionService, TimerService) {
            $('body').addClass("pic");
            $scope.thinkIMadeIt = thinkIMadeIt;
            $scope.skipQuestion = skipQuestion;
            $scope.numOfRightQuestions = 0;
            $scope.numOfQuestions = 0;
            $scope.gameOver = false;
            $scope.startNewQuestion = startNewQuestion;
            setTotalNumOfQuestions();
            startNewQuestion();

            $scope.$on('nextQuestion', function (event, args) {
                startNewQuestion();
            });

            function setTotalNumOfQuestions(){
                QuestionService.getTestPlan().then(function(testPlan){
                    $scope.totalNumOfQuestions = testPlan.length;
                });
            }

            function startNewQuestion(){
                if (!QuestionService.isThereMoreQuestions()) {
                    gameOver();
                    return;
                }
                cleanAnswerArea();
                QuestionService.getQuestion().then(function(question, status, headers, config) {
                    $scope.numOfQuestions ++;
                    setQuestion(question);
                    TimerService.start();
                    setTimer($scope.timeForQuestion);
                    startTimer();
                });
                // .error(function(data, status, headers, config) {
                //        console.log("we have a problem..");
                //        //TODO : error handling
                //});
            }

            function cleanAnswerArea(){
                $scope.$emit("cleanAnswerArea");
            }

            function setQuestion(question){
                this.currentQuestion = question;
                $scope.correctAnswer = question.answer;
                $scope.content = question.code;
                $scope.timeForQuestion = getTimeForQuestion(question);
                $scope.$apply();
            }

            function getTimeForQuestion(question){
                var timeForQuestion = question.timeForQuestion;
                if(!timeForQuestion){
                    timeForQuestion = 13;
                }
                return timeForQuestion;
            }

            function summarizeQuestion(){
                var answer =  $scope.answer;
                if(this.currentQuestion) {
                    $scope.correctAnswer = this.currentQuestion.answer;
                    $scope.$emit('checkAnswer');
                }
            }
            
            function thinkIMadeIt() {
                finishQuestion(false);
            }

            function skipQuestion() {
                finishQuestion(true);
            }

            function finishQuestion(skip) {
                $scope.skip = skip;
                TimerService.stop();
                stopTimer();
            }

            function gameOver(){
                $scope.gameOver = true;
                $scope.$emit("gameOver");
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

            $scope.$on('timer-stopped', function (event, args) {
                summarizeQuestion();
            });

        }]);
});