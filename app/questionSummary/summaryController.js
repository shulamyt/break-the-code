//http://localhost:3000/index.html#/login
angular.module('BreakTheCode')
    .controller('SummaryController', ['$scope', '$rootScope', '$location', '$http', '$sce', 'QuestionService', 'AnswerService',
        function($scope, $rootScope, $location, $http, $sce, QuestionService, AnswerService) {

            $scope.$on('checkAnswer', function (event, args) {
                var differences = createDifferences();
                countDifferences(differences);
                calcScore();
                $scope.differences = differences;
                openPopup();
            });

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
            }

            $scope.$on('nextQuestion', function (event, args) {
                $rootScope.$emit('nextQuestion');
            });

            function openPopup(){
                $scope.$emit('openPopup');
            }

            function createDifferences(){
                var correctAnswer = $scope.$parent.correctAnswer;
                var answer = $scope.answer;
                var differences = JsDiff.diffChars(correctAnswer, answer);
                return differences;
            }

        }]);