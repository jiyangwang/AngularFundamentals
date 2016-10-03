
/* Using $http Promises
eventsApp.factory('eventData', function($http) {
    return {
        getEvent: function () {
            return $http({method: 'GET', url: '/data/event/1'});
        }  
    };
});
*/

// Using $resource Service
eventsApp.factory('eventData', function($resource) {
    var resource = $resource('/data/event/:id', {id:'@id'}, {"getAll": {method: "GET", isArray: true, params: {something: "foo"}}});
    return {
        getEvent: function(eventId) {
            return resource.get({id:eventId});
        },
        save: function(event) {
            event.id = 999;
            return resource.save(event);
        },
        getAllEvents: function() {
            return resource.query();
        }
    };
});