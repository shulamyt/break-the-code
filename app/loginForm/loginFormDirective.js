define([
    '../app',
    'jquery',
    'jqueryUi',
    'angular',
    './loginFormController',
    'text!./loginFormTemplate.html'
], function(app, $, $$) {
app.directive('loginform', function() {
        return {
            restrict: 'E',
            templateUrl: 'loginForm/loginFormTemplate.html',
            controller : "loginFormController",
            link: function (scope, element) {
                var popupEl = $(element).find('[data-point="popup"]');
                popupEl.dialog({
                    resizable: false,
                    height:600,
                    width: 400,
                    modal: true,
                    autoOpen: false,
                    closeOnEscape: false,
                    buttons: {
                        "Let's start !": function() {
                            $( this ).dialog( "close" );
                            $('body').find(".welcome").hide();
                            scope.startTheGame();
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