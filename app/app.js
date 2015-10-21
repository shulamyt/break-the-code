define([
	'angular',
	'angularRoute',
	'angularResource',
	'angularCookies',
	'checklistModel'
], function() {
	return angular.module('BreakTheCode', ['ngRoute','ngResource', 'ngCookies', 'timer', 'checklist-model']);
});

