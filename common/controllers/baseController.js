define(['angularAMD', 'underscore', 'messages'], function (angularAMD, _, messages) {
	angularAMD.controller('baseController', ['$scope', '$location', '$window', '$cookieStore', '$bus','$rootScope', function ($scope, $location, $window, $cookieStore, $bus, $rootScope) {
		$scope.init = function() {
			$('body').on('click', function(e) {
				angular.forEach($scope.toggleViewItems, function(i, item){
					if(item!='fullScreen') {
						$scope.toggleViewItems[item] = ($(e.target).hasClass('.'+item) || $(e.target).closest('.'+item).length) ? true : false;
						$scope.$apply();
					}
				});
			});
		}
		$scope.toggleViewItems = {};
		$scope.isNavActive = function (navname, initial) {
            if (($location.path() === '/' + navname) ||
				(initial == 'default' && $location.path() === '/' + navname)){
                return "active";
            }
        };
        $scope.toggleView = function(view){
        	$scope.toggleViewItems[view] = !$scope.toggleViewItems[view];
        }
        $scope.toggleLeftNav = function(view){
        	$scope[view] = !$scope[view];
        }
        $scope.toggleFullscreen = function(view){
        	 if ((document.fullScreenElement && document.fullScreenElement !== null) ||
			      (!document.mozFullScreen && !document.webkitIsFullScreen)) {
			      if (document.documentElement.requestFullScreen) {
			        document.documentElement.requestFullScreen();
			      }
			      else if (document.documentElement.mozRequestFullScreen) {
			        document.documentElement.mozRequestFullScreen();
			      }
			      else if (document.documentElement.webkitRequestFullScreen) {
			        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
			      }
			    }
			    else {
			      if (document.cancelFullScreen) {
			        document.cancelFullScreen();
			      }
			      else if (document.mozCancelFullScreen) {
			        document.mozCancelFullScreen();
			      }
			      else if (document.webkitCancelFullScreen) {
			        document.webkitCancelFullScreen();
			      }
			    }
			    $scope.toggleView(view);
        }
        $scope.logout = function() {
        	var user = $cookieStore.get('user');
        	var params = {
                    token: user.token || ''
            	}
            $bus.fetch({
                name: 'logout',
                api: 'logout',
                params: params,
                data: null
            })
            .done(function (success) {
                if (success.response.status='Success' && success.response.data  && success.response.sucMsg.length) {
                    $rootScope.user = {};
					$rootScope.loginInfo = messages.logoutSuccess;
					$location.path('login');
                } else {
                    $rootScope.user = {};
                    var errors = [];
                    _.forEach(success.response.errMsg, function (error) {
                        errors.push(error)
                    });
                    if (errors.length) {
                        $rootScope.loginInfo = (errors)?errors.join(',').replace(',',' '):'';
                    } else {
                        $rootScope.loginInfo = messages.logoutError;
                    }
                }
                $cookieStore.put('user', $rootScope.user);
            }).fail(function (error) {
                $rootScope.loginInfo = messages.logoutError;
            });
		}
		$scope.back = function () {
            $window.history.back();
        };
        $scope.navigate = function (url) {
            $location.path(url);
        };
	}]);
});