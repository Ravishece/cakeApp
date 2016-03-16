define(['app','messages','underscore'], function (app, messages, _) {
	app.controller('userController', ['$scope', '$http', '$bus', '$rootScope', function ($scope, $http, $bus, $rootScope) {
		$scope.init = function(){
            $rootScope.loginInfo = '';
		}

		$scope.changePin = function() {
			data = {
                email: $scope.email,
                securePin : $scope.pin
            };
            $bus.fetch({
                name: 'changepin',
                api: 'changepin',
                params: null,
                data: data
            })
            .done(function (success) {
                if (success.response.status='Success' && success.response.data  && success.response.sucMsg.length) {
                    $rootScope.loginInfo = messages.forgotSuccess;
                } else {
                    $rootScope.user = {};
                    var errors = [];
                    _.forEach(success.response.errMsg, function (error) {
                        errors.push(error)
                    });
                    if (errors.length) {
                        $rootScope.loginInfo = (errors)?errors.join(',').replace(',',' '):'';
                    } else {
                        $rootScope.loginInfo = messages.forgotError;
                    }
                }
            }).fail(function (error) {
                $rootScope.loginInfo = messages.forgotError;
            });
		}

		$scope.forgotPin = function() {
            var data = {
                    email: $scope.email
                }
            $bus.fetch({
                name: 'forgotpin',
                api: 'forgotpin',
                params: null,
                data: data
            })
            .done(function (success) {
                if (success.response.status='Success' && success.response.data  && success.response.sucMsg.length) {
                    $rootScope.loginInfo = messages.forgotSuccess;
                } else {
                    $rootScope.user = {};
                    var errors = [];
                    _.forEach(success.response.errMsg, function (error) {
                        errors.push(error)
                    });
                    if (errors.length) {
                        $rootScope.loginInfo = (errors)?errors.join(',').replace(',',' '):'';
                    } else {
                        $rootScope.loginInfo = messages.forgotError;
                    }
                }
            }).fail(function (error) {
                $rootScope.loginInfo = messages.forgotError;
            });
            
        };

	}]);
});