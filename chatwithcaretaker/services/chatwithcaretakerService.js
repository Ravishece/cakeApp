define(['app', 'config'], function (app, config) {
	app.service('chatwithcaretakerService', ['$http', '$q', function ($http, $q) {
		
		this.getMenu = function(seoName) {
		    //var seoName = seoName || 'Affirmation';
			var deferred = $q.defer();
            $http.post(config.apiHost + 'menus/'+seoName).success(function (response) { 
            	var responseArray = [];
            	if(response.data){
            		responseArray = response.data.SeoFlowModel[0].Flow;
            	}
                deferred.resolve(responseArray); 
            }); 
            return deferred.promise;
		};
		
		this.getFlow = function(flowName) {
		    //var flowName = flowName || 'personalInfo';
			var deferred = $q.defer();
            $http.post(config.apiHost + 'flow/'+flowName).success(function (response) { 
            	var responseArray = [];
            	if(response.data){
            		responseArray = response.data.SeoFlowModel[0].pages;
            	}
                deferred.resolve(responseArray);
            }); 
            return deferred.promise;
		};
		
		this.getCaretaker = function() {
			var deferred = $q.defer();
            $http.post(config.apiHost + 'caretaker').success(function (response) { 
            	var responseArray = [];
            	if(response.data){
            		responseArray = response.data.careTakerModel;
            	}
                deferred.resolve(responseArray);
            }); 
            return deferred.promise;
		};
		
		this.getCategoryList = function() {
			var deferred = $q.defer();
            $http.post(config.apiHost + 'categorylist').success(function (response) { 
            	var responseArray = [];
            	if(response.data){
            		responseArray = response.data.categoryModel;
            	}
                deferred.resolve(responseArray);
            }); 
            return deferred.promise;
		};
		
	}]);
});