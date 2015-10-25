define([
  '../app',
  'angular'
], function(app) {
  app.filter('range', function() {
    return function(input, min, max) {
      min = parseInt(min); //Make string input int
      max = parseInt(max);
      for (var i=min; i<max; i++)
        input.push(i);
      return input;
    };
  });

  app.filter('disRange', function() {
    return function(input, max, min) {
      min = parseInt(min); //Make string input int
      max = parseInt(max);
      for (var i=max; i>=min; i--)
        input.push(i);
      return input;
    };
  });

  app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
 
                event.preventDefault();
            }
        });
    };
  });
  
});