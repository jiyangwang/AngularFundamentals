"use strict";

eventsApp.controller('EventController',
	function EventController($scope, eventData, $anchorScroll, $routeParams, $route) {

		// $scope.snippet = '<span style="color:red">hi there</span>';
		// $scope.boolValue = false;
		// $scope.mystyle = {color:'red'};
		// $scope.myclass = "blue";
		// $scope.buttonDisabled = true;
		$scope.sortorder = 'name';
		$scope.event = eventData.getEvent($routeParams.eventId);
		$scope.reload = function() {
			$route.reload();
		};
		
        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };
        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
        $scope.scrollToSession = function() {
        	$anchorScroll();
        }
	}
);