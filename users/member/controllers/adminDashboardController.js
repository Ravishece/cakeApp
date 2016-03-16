define(['app'], function (app) {
	app.controller('adminDashboardController', ['$scope', '$http', function ($scope, $http) {

		$scope.orderDetailView = false;
		
		$scope.toggleOrderDetails = function(){
			$scope.orderDetailView = !$scope.orderDetailView;
		}
		
	}]);
});