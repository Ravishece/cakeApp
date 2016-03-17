define(['app'], function (app) {
	app.controller('associateDashboardController', ['$scope', '$http','$location', function ($scope, $http, $location) {
		
		$scope.customCakeOrderScreen = true;
		
		$scope.toggleCustomCakeWidget = function(){
			//$location.path('admin');
			$scope.customCakeOrderScreen = !$scope.customCakeOrderScreen;
		}
		
	}]);
});