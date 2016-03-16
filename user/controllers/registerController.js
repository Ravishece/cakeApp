define(['app','messages'], function (app, messages) {
	app.controller('registerController',['$scope', '$location', '$bus','$cookieStore','$rootScope', function ($scope, $location, $bus, $cookieStore, $rootScope) {
        $scope.init = function() {
            $rootScope.loginInfo = '';
            $('select').material_select();
            $scope.gender = 'male';
        };
        $scope.submit = function() {
          	var data = {
                    firstName: $scope.firstname,
                    lastName: $scope.lastname,
                    email: $scope.email,
                    securePin: $scope.securepin,
                    birthDate: $scope.dob.toLocaleDateString(),
                    country: country ? country.value : ''
            	}

                console.log(data);

            $bus.fetch({
                name: 'register',
                api: 'register',
                params: null,
                data: data
            })
            .done(function (success) {
                if (success.response.status='Success' && success.response.data  && success.response.sucMsg.length) {
                    $rootScope.loginInfo = messages.registerSuccess;
                    $location.path('login');
                } else {
                    var errors = [];
                    _.forEach(success.response.errMsg, function (error) {
                        errors.push(error)
                    });
                    if (errors.length) {
                        $rootScope.loginInfo = (errors)?errors.join(',').replace(',',' '):'';
                    } else {
                        $rootScope.loginInfo = messages.registerError;
                    }
                }
                $cookieStore.put('user', $rootScope.user);
            }).fail(function (error) {
                $rootScope.loginInfo = messages.registerError;
            });
            
        };

  	}]);
});