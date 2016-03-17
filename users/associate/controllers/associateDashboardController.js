define(['app'], function (app) {
	app.controller('associateDashboardController', ['$scope', '$http','$location', function ($scope, $http, $location) {
		
		$scope.customCakeOrderScreen = false;
		
		$scope.submitCakeOrder = function(){
			$scope.customCakeOrderScreen = false;
			$scope.visibleContent = 'step1-content';
			$scope.step2Active = $scope.step3Active = $scope.step4Active = $scope.step5Active = '';
		}
		
		$scope.cakeSpec = {};
		$scope.selectedSpec = {};
		$scope.visibleContent = 'step1-content';
		
		var activeBreadcrumb  = 'active-steps';
		$scope.step1Active = activeBreadcrumb;
		
		$scope.selectedSpec.shape = {};
		$scope.selectedSpec.type = {};
		$scope.selectedSpec.size = {};
		
		$scope.selectedSpec.shape.name='square';
		$scope.selectedSpec.type.name='FRESH CREAM';
		$scope.selectedSpec.size.image='8\"';
		$scope.selectedSpec.size.portion='10-15 portion';
		
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
		
		$scope.cakeSpec.types = [
			{ "name" : "FRESH CREAM"
			},
			{ "name" : "CHOC FRESH CREAM"
			},
			{ "name" : "BUTTER CREAM"
			},
			{ "name" : "CHOC BUTTER CREAM"
			},
			{ "name" : "ICING"
			}
		]
		
		$scope.cakeSpec.sizes = [
			{ "image" : "s1",
			  "inch":"8\"",
			  "portion":"10-15 portion"
			},
			{ "image" : "s2",
			  "inch":"10\"",
			  "portion":"15-20 portion"
			},
			{ "image" : "s3",
			  "inch":"12\"",
			  "portion":"20-30 portion"
			},
			{ "image" : "s4",
			  "inch":"14\"",
			  "portion":"30-40 portion"
			},
			{ "image" : "s5",
			  "inch":"18\"",
			  "portion":"40-50 portion"
			},
			{ "image" : "s6",
			  "inch":"20\"",
			  "portion":"50-60 portion"
			}
		]
		
		$scope.showContent = function(str){
			$scope.visibleContent = str;
			
			switch(str){
				case 'step2-content':$scope.step2Active = activeBreadcrumb;
				break;
				case 'step3-content':$scope.step3Active = activeBreadcrumb;
				break;
				case 'step4-content':$scope.step4Active = activeBreadcrumb;
				break;
				case 'step5-content':$scope.step5Active = activeBreadcrumb;
				$('.css-custom-img').show();
				$('#step5FinalContent').html($('#customList').html());
				$('#customList').hide();
				break;
			}
		}
			
		function removeProperty(Arrobj,key){
			for(var obj in Arrobj){
					if(Arrobj[obj][key]){
						delete Arrobj[obj][key];
					}
			}
		}
		
		function updateSelectedState(Arrobj,key,value,changeValue){
			removeProperty(Arrobj,'selected');
			
			for(var obj in Arrobj){
					if(Arrobj[obj][key] === value){
						Arrobj[obj]['selected'] = changeValue;
						return Arrobj[obj];
					}
			}
		}
		
		$scope.selectShape = function(shape){
			$scope.selectedSpec.shape = shape;
			updateSelectedState($scope.cakeSpec.shapes,'name',shape.name,'select-shape');
		}
		
		$scope.selectSize = function(size){
			$scope.selectedSpec.size = size;
			updateSelectedState($scope.cakeSpec.sizes,'image',size.image,'select-shape');
		}
		
		$scope.selectType = function(type){
			$scope.selectedSpec.type = type;
			updateSelectedState($scope.cakeSpec.types,'name',type.name,'active');
		}
			
			
		$scope.toggleCustomCakeWidget = function(){
			//$location.path('admin');
			$scope.customCakeOrderScreen = !$scope.customCakeOrderScreen;
		}
		
	}]);
});