'use strict';

require.config({
	paths: {
		'angular': 'lib/angular/1.3.9/angular.min',
		'angularRoute': 'lib/angular/1.3.9/angular-route.min',
		'angularResource': "lib/angular/1.3.9/angular-resource.min",
		'angularCookies': "lib/angular/1.3.9/angular-cookies.min",
		'jquery' :"lib/jquery-2.1.3",
		'jqueryUi': "lib/jquery-ui",
		'codemirror': "lib/codemirror/mode/javascript/javascript",
		//'JsDiff':"lib/JsDiff",
		'angularTimer': "lib/angular-timer.min",
		'humanizeDuration': "lib/humanize-duration",
		'momentWithLocales': "lib/moment-with-locales",
		'checklistModel': "lib/checklist-model",
		'text': "lib/require-text"
	},
	shim: {
		'angular' : {'exports' : 'angular'},
		'jqueryUi': ['jquery'],
		'angularRoute': ['angular'],
		'angularResource': ['angular'],
		'angularCookies': ['angular'],
		'checklistModel' : ['angular']

	},
	priority: [
		"angular"
	]
});

require([
	'angular',
	 'main'
	], function() {
		var $html = angular.element(document.getElementsByTagName('html')[0]);
		angular.element().ready(function() {
			// bootstrap the app manually
			angular.bootstrap(document, ['BreakTheCode']);
		});
	}
);