define([
    '../app',
    'jquery',
    'text!./codeAreaTemplate.html'
], function(app) {
    app.directive('codeArea', function() {
        return {
            restrict: 'E',
            templateUrl: 'questions/codeAreaTemplate.html',
            link: function (scope, element) {
                require(['jquery', 'codemirror'], function($, CodeMirror) {
                    var textArea = $(element).find('textarea').get(0);
                    var editor = CodeMirror.fromTextArea(textArea, {
                        theme: 'default',
                        lineNumbers: true
                    });

                    var content = scope.content;
                    if(content){
                        editor.setValue(content);
                    }
                    
                    scope.$watch('content', function() {
                        var content = scope.content;
                        if(content){
                            editor.setValue(content);
                        }
                    });
                });
            }
        };
    });
});