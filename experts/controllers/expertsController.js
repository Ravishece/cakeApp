define(['app', 'underscore', 'experts/services/expertsService'], function (app, _) {
	app.controller('expertsController', ['$scope', 'expertsService', function ($scope, expertsService) {
		$scope.locations = [];
		$scope.categories = [];
		expertsService.getExperts().then(function(data) {
			$scope.experts = data;	
		});
		$scope.getFilteredLocations = function getLocations() {
			expertsService.getFilteredLocations($scope.location).then(function(filteredLocations) {
				$scope.filteredLocations = filteredLocations;
			})
		} 
		$scope.getFilteredCategories = function getFilteredCategories() {
			expertsService.getFilteredCategories($scope.category).then(function(filteredCategories) {
				$scope.filteredCategories = filteredCategories;
			})
		}
		$scope.selectCategory = function selectCategory(item) {
			$scope.categories.push({label: item.category, type: "category"})
			$scope.filteredCategories = [];
			$scope.category = null;
		} 
		$scope.selectLocation = function selectLocation(item) {
			$scope.locations.push({label: item.location, type: "location"})
			$scope.filteredLocations = [];
			$scope.location = null;
		}

		$scope.submitFilters = function submitFilters() {
			$scope.appliedFilters = _.map($scope.locations.concat($scope.categories), function(item) {
				item.class = (item.label == "location") ? "mdi-maps-pin-drop" : "mdi-content-filter-list";
				return item;
			});
		}

	}]);
});