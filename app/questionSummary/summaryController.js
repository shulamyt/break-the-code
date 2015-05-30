//http://localhost:3000/index.html#/login
angular.module('BreakTheCode')
    .controller('SummaryController', ['$scope', '$rootScope', '$location', '$http', '$sce', 'QuestionService', 'AnswerService',
        function($scope, $rootScope, $location, $http, $sce, QuestionService, AnswerService) {

            $scope.$on('checkAnswer', function (event, args) {
                openPopup();
                getRightAnswer().then(function(rightAnswer){
                    var answer = {};
                    answer.userAnswer = $scope.answer;
                    answer.rightAnswer = rightAnswer;
                    answer.differences = createDifferences(answer.rightAnswer, answer.userAnswer);
                    countDifferences(answer.differences);
                    calcScore();
                    $scope.differences = answer.differences;
                    AnswerService.saveAnswer(answer);
                });
            });

            function getRightAnswer(){
                var question = QuestionService.getCurrentQuestion();
                var questionId = question.id;
                var correctAnswer = AnswerService.getRightAnswer(questionId);
                return correctAnswer;
            }

            function calcScore(){
                
            }

            function countDifferences(differences){
                var numAdded = 0;
                var numCorrect = 0;
                var numRemoved = 0;
                for (var diffIndex in differences){
                    var diff = differences[diffIndex];
                    if(diff.added){
                        numAdded = numAdded + diff.count;
                    }else if(diff.removed){
                        numRemoved = numRemoved + diff.count;
                    }else{//correct
                        numCorrect = numCorrect + diff.count;
                    }
                }
                $scope.removed = numRemoved;
                $scope.added = numAdded;
                $scope.correct = numCorrect;
                //TODO - update this on answer to save to DB
            }

            $scope.$on('nextQuestion', function (event, args) {
                $rootScope.$emit('nextQuestion');
            });

            function openPopup(){
                $scope.$emit('openPopup');
            }

            function createDifferences(rightAnswer, answer){
                var differences = JsDiff.diffChars(rightAnswer, answer);
                return differences;
            }

        }]);