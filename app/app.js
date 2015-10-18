define([
	'angular',
	'angularRoute',
	'angularResource',
	'angularCookies',
	'angularTimer',
	'humanizeDuration',
	'momentWithLocales',
	'checklistModel'
], function(angular, angularRoute) {
	angular.module('BreakTheCode', ['ngRoute','ngResource', 'ngCookies', 'timer', 'checklist-model']);
});

