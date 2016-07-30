define([
    '../app',
    'angular'
], function(app) {
    app.controller('ExplainController', ['$scope', '$location',
        function($scope,  $location) {
            $scope.start = function(){
                $location.path('questions');
            }
        }
    ]);
});