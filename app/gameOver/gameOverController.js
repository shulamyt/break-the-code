define([
    '../app',
    'angular',
    '../service/commentService'
], function(app) {
    app.controller('gameOverController', ['$scope', '$rootScope', '$location', '$http', '$sce', 'CommentService',
        function($scope, $rootScope, $location, $http, $sce, CommentService) {
            $scope.comment = {};

            $scope.saveComment = function (){
                CommentService.saveComment($scope.comment);
            };

        }]);
});