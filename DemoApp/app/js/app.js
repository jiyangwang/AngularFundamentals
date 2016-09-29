'use strict';

// var eventsApp = angular.module('eventsApp', ['ngSanitize']);
// var eventsApp = angular.module('eventsApp', []);
// var eventsApp = angular.module('eventsApp', ['ngResource']);
// var eventsApp = angular.module('eventsApp', ['ngCookies']);

var eventsApp = angular.module('eventsApp', [])
	.factory('myCache', function($cacheFactory) {
		return $cacheFactory('myCache', {capacity:3})
	});
