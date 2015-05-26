angular.module('BreakTheCode')
    .directive('popup', function() {
        return {
            restrict: 'E',
            templateUrl: 'questions/popupTemplate.html',
            link: function (scope, element) {
                var $popup = $(element).find('[data-point="popup"]');
                $popup.dialog({
                    resizable: false,
                    height:200,
                    modal: true,
                    autoOpen: false,
                    closeOnEscape: false,
                    buttons: {
                        "Let's continue !": function() {
                            $( this ).dialog( "close" );
                            scope.getNextQuestion();
                        }
                    }
                });
                scope.$on('timer-stopped', function (event, args) {
                    scope.$apply();
                    $popup.dialog( "close" );
                    $popup.dialog( "open" );
                });
            }
        };
    });