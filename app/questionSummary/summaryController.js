//http://localhost:3000/index.html#/login
angular.module('BreakTheCode')
    .controller('SummaryController', ['$scope', '$rootScope', '$location', '$http', '$sce', 'QuestionService', 'AnswerService',
        function($scope, $rootScope, $location, $http, $sce, QuestionService, AnswerService) {

            $scope.$on('checkAnswer', function (event, args) {
                var differences = createDiff();
                calcScore(differences);
                $scope.differences = differences;
                openPopup();
            });

            function calcScore(differences){
                var numAdded = 0;
                var numCorrect = 0;
                var numRemoved = 0;
                for (diffIndex in differences){
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

            //$scope.$watch('answer', function() {
            //    createDiff();
            //});


            function createDiff(){
                var correctAnswer = $scope.$parent.correctAnswer;
                var answer = $scope.answer;
                var differences = JsDiff.diffChars(correctAnswer, answer);
                return differences;
            }

            // function (currentAnswer, trueAnswer){
            //
            //    var diff = JsDiff.diffChars(trueAnswer, currentAnswer);
            //    var result = $('<span></span>');
            //    diff.forEach(function(part){
            //        // yellow for additions, red for deletions
            //        // green for common parts
            //        var className = "correct";
            //        if(part.added){
            //            className = "added";
            //        }
            //        else if(part.removed){
            //            className = "removed";
            //        }
            //        var span = $('<span></span>');
            //        span.addClass(className);
            //        span.text(part.value);
            //        result.append(span);
            //
            //    });
            //    return result;
            //};

        }]);