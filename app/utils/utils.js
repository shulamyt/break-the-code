define([
    'angular',
    'app'
], function(app) {
angular.module('BreakTheCode').filter('range', function() {
  return function(input, min, max) {
    min = parseInt(min); //Make string input int
    max = parseInt(max);
    for (var i=min; i<max; i++)
      input.push(i);
    return input;
  };
});

angular.module('BreakTheCode').filter('disRange', function() {
  return function(input, max, min) {
    min = parseInt(min); //Make string input int
    max = parseInt(max);
    for (var i=max; i>=min; i--)
      input.push(i);
    return input;
  };
});
});