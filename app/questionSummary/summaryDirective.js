define([
    'angular',
    '../app',
    './summaryController',
    'text!./summaryTemplate.html'
], function(app) {
angular.module('BreakTheCode')
    .directive('summary', function() {
        return {
            restrict: 'E',
            templateUrl: 'questionSummary/summaryTemplate.html',
            controller : "SummaryController",
            //scope: {
            //    answer: "@",
            //    //correctAnswer1: "@"
            //},
            link: function (scope, element) {
                var popupEl = $(element).find('[data-point="popup"]');
                popupEl.dialog({
                    resizable: false,
                    height:400,
                    modal: true,
                    autoOpen: false,
                    closeOnEscape: false,
                    buttons: {
                        "Let's continue !": function() {
                            $( this ).dialog( "close" );
                            scope.$emit('nextQuestion');
                            //scope.$broadcast('nextQuestion');
                        }
                    }
                });
                scope.$on('openPopup', function (event, args) {
                    scope.$applyAsync(function() {
                        popupEl.dialog( "open" );
                    });
                });
            }
        };
    });
});