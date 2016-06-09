define([
    '../app',
    'jquery',
    'jqueryUi',
    'angular',
    './gameOverController',
    'text!./gameOverTemplate.html'
], function(app, $, $$) {
app.directive('gameover', function() {
        return {
            restrict: 'E',
            templateUrl: 'gameOver/gameOverTemplate.html',
            controller : "gameOverController",
            
            link: function (scope, element) {
                var popupEl = $(element).find('[data-point="popup"]');
                popupEl.dialog({
                    resizable: false,
                    height:400,
                    modal: true,
                    autoOpen: false,
                    closeOnEscape: false,
                    buttons: {
                        "Goodbye": function() {
                            window.open('location', '_self', '');
                            window.close();
                        }
                    }
                });
                scope.$on("gameOver", function (event, args) {
                    scope.$applyAsync(function() {
                        popupEl.dialog( "open" );
                    });
                });
            }
        };
    });
});