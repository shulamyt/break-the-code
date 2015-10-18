'use strict';

require.config({
	paths: {
		'angular': 'lib/angular',
		'angularRoute': 'lib/angular-route',
		'jquery' :"lib/jquery-2.1.3",
		'jqueryUi': "lib/jquery-ui",
		'angularResource': "lib/angular-resource",
		'angularCookies': "lib/angular-cookies",
		'codemirror': "lib/codemirror/lib/codemirror",
		'codemirrorJavascript': "lib/codemirror/mode/javascript/javascript",
		'diff':"lib/diff",
		'angularTimer': "lib/angular-timer.min",
		'humanizeDuration': "lib/humanize-duration",
		'momentWithLocales': "lib/moment-with-locales",
		'checklistModel': "lib/checklist-model"
	},
	shim: {
		'angular' : {'exports' : 'angular'},
		'jqueryUi': ['jquery'],
		'angularRoute': ['angular'],
		'angularResource': ['angular'],
		'angularCookies': ['angular'],
		'checklistModel' : ['angular'],
		'angularTimer' : ['angular', 'humanizeDuration', 'momentWithLocales'],

	},
	priority: [
		"angular"
	]
});

require([
	'angular',
	 'main'
	], function(angular, main) {
		var $html = angular.element(document.getElementsByTagName('html')[0]);
		angular.element().ready(function() {
			// bootstrap the app manually
			angular.bootstrap(document, ['BreakTheCode']);
		});
	}
);