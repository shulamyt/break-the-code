define([
    'angular',
    '../app'
], function(app) {
angular.module('BreakTheCode')
    .service('TimerService', ['$http', '$q',
        function($http, $q) {
            var TimerService = {};
            var stopWatch;

            var StopWatch = function (performance) {
                this.startTime = 0;
                this.stopTime = 0;
                this.running = false;
                this.performance = performance === false ? false : !!window.performance;
            };

            StopWatch.prototype.currentTime = function () {
                return this.performance ? window.performance.now() : new Date().getTime();
            };

            StopWatch.prototype.start = function () {
                this.startTime = this.currentTime();
                this.running = true;
            };

            StopWatch.prototype.stop = function () {
                this.stopTime = this.currentTime();
                this.running = false;
            };

            StopWatch.prototype.getElapsedMilliseconds = function () {
                if (this.running) {
                    this.stopTime = this.currentTime();
                }

                return this.stopTime - this.startTime;
            };

            TimerService.stop = function(){
                stopWatch.stop();
            };

            TimerService.start = function(){
                stopWatch = new StopWatch();
                stopWatch.start();
            };

            TimerService.getTime = function(){
                return stopWatch.getElapsedMilliseconds();
            };

            return TimerService;
        }]);
});