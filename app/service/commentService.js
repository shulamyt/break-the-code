define([
    '../app',
    'angular',
    './userService'
], function(app) {
    app.service('CommentService', ['$http', 'UserService',
        function($http, UserService) {
            var CommentService = {};

            CommentService.saveComment = function(comment){
                comment.userId = UserService.getCurrentUser().id;
                var promise = new Promise(function(resolve, reject) {
                    $http.post('/comment', comment)
                    .success(function(comment) {
                        resolve(comment);
                    })
                    .error(function(err) {
                        reject(err);
                    });
                });
                return promise;
            };


            return CommentService;
        }]);

});