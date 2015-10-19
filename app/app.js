define([
	'angular',
	'angularRoute',
	'angularResource',
	'angularCookies',
	'checklistModel'
], function(angular, angularRoute) {
	angular.module('BreakTheCode', ['ngRoute','ngResource', 'ngCookies', 'timer', 'checklist-model']);
});

