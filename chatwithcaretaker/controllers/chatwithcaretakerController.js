define(['app', 'underscore', 'chatwithcaretaker/services/chatwithcaretakerService'], function (app, _) {
	app.controller('chatwithcaretakerController', ['$scope', '$http','chatwithcaretakerService', function ($scope, $http, chatwithcaretakerService) {
		
		$scope.menuItems = [];
		$scope.caretakerList=[];
		$scope.categoryList=[];
		
		
		$scope.projects =  [
    { id: '123', name: 'Yeomasdn',  watchers: '1233' },
    { id: '124', name: 'Grunt',   watchers: '4343' },
    { id: '125', name: 'Angular', watchers: '56789' }
   ];
  $scope.data = {
    favoriteProject: null
  };
  
  
  
		$scope.pageData = {};
		
		$scope.pageData.selectedMenu = null;
		
		$scope.basicScreenShow = true;
		//TODO: need to get the seoName dynamically from previous service
		var seoName = 'Affirmation';
		chatwithcaretakerService.getMenu(seoName).then(function(data){
			console.log(data)
			$scope.menuItems = data;
		},function(error){
			console.log(error)
		});
		
		
		chatwithcaretakerService.getCaretaker().then(function(data){
			console.log(data)
			$scope.caretakerList = data;
		},function(error){
			console.log(error)
		});
		
		chatwithcaretakerService.getCategoryList().then(function(data){
			console.log(data)
			$scope.categoryList = data;
		},function(error){
			console.log(error)
		});
		
		
	}]);
});
