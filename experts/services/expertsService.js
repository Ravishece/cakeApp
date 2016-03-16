define(['app', 'config'], function (app, config) {
	app.service('expertsService', ['$http', '$q', function ($http, $q) {
		this.getExperts = function() {
			var deferred = $q.defer();
            $http.post(config.apiHost + 'FeExpert').success(function (response) { 
            	var experts = [];
            	if(response.data){
            		experts = response.data.expertModel;
            	}
                deferred.resolve(experts); 
            }); 
            return deferred.promise;
		};
		this.getFilteredLocations = function(key) {
			var deferred = $q.defer();
            $http.get(config.apiHost + 'locations?key=' + key).success(function (response) { 
            	var locations = [];
            	if(response.data){
            		locations = response.data.locations;
            	}
                deferred.resolve(locations); 
            }); 
            return deferred.promise;
		};
        this.getFilteredCategories = function(key) {
            var deferred = $q.defer();
            $http.get(config.apiHost + 'categories?key=' + key).success(function (response) { 
                var locations = [];
                if(response.data){
                    locations = response.data.categories;
                }
                deferred.resolve(locations); 
            }); 
            return deferred.promise;
        };

	}]);
});