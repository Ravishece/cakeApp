define(['app', 'underscore', 'messages'], function (app, _, messages) {
	app.controller('loginController',['$scope', '$location', '$bus','$cookieStore', '$rootScope','$routeParams', function ($scope, $location, $bus, $cookieStore, $rootScope, $routeParams) {
        $scope.init = function() {
            var data;
            if($location.path().indexOf('activate/')) {
                //$scope.activateUser();
            }
        };
       /* $scope.activateUser = function() {
            data = {
                code : $routeParams.code
            };
            $bus.fetch({
                name: 'activate',
                api: 'activate',
                params: null,
                data: data
            })
            .done(function(success){
                $scope.loginMsgs = messages.activationSuccess;
            }).fail(function(error){
                $scope.loginMsgs = messages.activationError;
            })
        }*/
        $scope.submit = function() {
            
            
          	var data = {
                email: $scope.email,
                securePin: $scope.securePin
        	}
            	
            if(data.email === 'associate'){
                $location.path('associate');
                return;    
            }else if(data.email === 'admin'){
                $location.path('admin');
                return;
            }
            
            
            $rootScope.user = {};
            $bus.fetch({
                name: 'login',
                api: 'login',
                params: null,
                data: data
            })
            .done(function (success) {
                if (success.response.status='Success' && success.response.data  && success.response.sucMsg.length) {
                    $rootScope.user.token = success.response.data.token;
                    $rootScope.loginInfo = messages.loginSuccess;
                    $location.path('associate');
                } else {
                    $rootScope.user = {};
                    var errors = [];
                    _.forEach(success.response.errMsg, function (error) {
                        errors.push(error)
                    });
                    if (errors.length) {
                        $rootScope.loginInfo = (errors)?errors.join(',').replace(',',' '):'';
                    } else {
                        $rootScope.loginInfo = messages.invalidCredential;
                    }
                }
                $cookieStore.put('user', $rootScope.user);
            }).fail(function (error) {
                $rootScope.loginInfo = messages.loginError;
            });
            
        };

  	}]);
});