define(['app'], function (app) {
	app.controller('adminDashboardController', ['$scope', '$http', function ($scope, $http) {

		$scope.orderDetailView = false;
		$scope.cakeDetails = {};
		$scope.cakeOrders = {};
		
		function getObject(Arrobj,key,value){
			for(var obj in Arrobj){
				//for(var elm in obj){
					if(Arrobj[obj][key] === value){
						return Arrobj[obj];
					}
				//}
			}
		}
		
		$scope.toggleOrderDetails = function(temp){
			$scope.orderDetailView = !$scope.orderDetailView;
			if(temp !== undefined){
				//getObject('orderId',temp);
				$scope.selectedOrder = getObject($scope.cakeOrders,'orderId',temp);
			}
		}
		
		$scope.changeStatus = function(text){
			//alert('etesd');
			
			$scope.selectedOrder.status = text;
			switch(text){
				case 'completed' :  completedProcess();
					break;
				case 'pending' : break;
				case 'delivered' : break;
			}
		}
		
		$scope.openModal = function(e){
			e.preventDefault();
		}
		
		function completedProcess(){
			$scope.selectedOrder.status = 'pending';
			$('.capture-image-container').show();
		}
		
		$http.get('/cakeapp/mockup/orderDetails.json').success(function (response) { 
			if(response){
        		$scope.cakeDetails = response.details;
			}
        }); 
        
        $http.get('/cakeapp/mockup/cakeOrders.json').success(function (response) { 
			if(response){
        		$scope.cakeOrders = response.orders;
			}
        }); 
		
	}]);
});