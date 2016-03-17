define(['app'], function (app) {
	app.controller('associateDashboardController', ['$scope', '$http','$location', function ($scope, $http, $location) {
		
		$scope.customCakeOrderScreen = true;
		
		$scope.cakeSpec = {};
		
		$scope.cakeSpec.shapes = [
			{ "name" : "Square",
			  "image" :"img-square",
			},
			{ "name" : "Round",
			  "image" :"img-round",
			},
			{ "name" : "Heart",
			  "image" :"img-heart",
			},
			{ "name" : "Letters A-Z",
			  "image" :"img-letter",
			},
			{ "name" : "Numbers 0-9",
			  "image" :"img-num",
			}
			]
			
			
			
		$scope.toggleCustomCakeWidget = function(){
			//$location.path('admin');
			$scope.customCakeOrderScreen = !$scope.customCakeOrderScreen;
		}
		
	}]);
});