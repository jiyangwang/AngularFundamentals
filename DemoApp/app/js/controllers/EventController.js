"use strict";

eventsApp.controller('EventController',
	function EventController($scope) {

		// $scope.snippet = '<span style="color:red">hi there</span>';
		// $scope.boolValue = false;
		// $scope.mystyle = {color:'red'};
		// $scope.myclass = "blue";
		// $scope.buttonDisabled = true;
		$scope.sortorder = 'name';
		$scope.event = {
			name: 'Techbow',
			date: 1359781015626,
			time: '10:30am',
			price: 30,
			location: {
				address: 'Central Park',
				city: 'Santa Clara',
				province: 'CA',
			},
			imageUrl: '/img/angularjs-logo.png',
			sessions: [
				{
					name: 'Directives Masterclass',
					creatorName: 'Bob Smith',
					duration: 1,
					level: 'Introductory',
					abstract: 'Java',
					upVoteCount: 0
				},
				{
					name: 'Scopes for fun and profit',
					creatorName: 'Bob Smith',
					duration: 2,
					level: 'Intermediate',
					abstract: 'C++',
					upVoteCount: 0
				},
				{
					name: 'Well Behaved Controllers',
					creatorName: 'Bob Smith',
					duration: 4,
					level: 'Advanced',
					abstract: 'Javascript',
					upVoteCount: 0
				}
			]
		}
		$scope.upVoteSession = function(session) {
			session.upVoteCount++;
		};
		$scope.downVoteSession = function(session) {
			session.upVoteCount--;
		};
	}
);