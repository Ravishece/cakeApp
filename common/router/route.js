var dep = [
  'angularAMD',
  'angular-route',
  'angular-cookies',
  'angular-validator',
  'constants',
  'responseHandler',
  'dal',
  'bus',
  'common/controllers/baseController'
]

define(dep, function(angularAMD) {
//Define the app module
var app = angular.module("App", ['ngRoute','ngCookies','angularValidator']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  
  //CakeApp routing
  .when("/associate", angularAMD.route({
      templateUrl: 'users/associate/views/associateDashboard.html', controller: 'associateDashboardController', controllerUrl: 'users/associate/controllers/associateDashboardController'
  }))
  
  .when("/admin", angularAMD.route({
      templateUrl: 'users/member/views/adminDashboard.html', controller: 'adminDashboardController', controllerUrl: 'users/member/controllers/adminDashboardController'
  }))
  
  
  //Login routing
 .when("/login", angularAMD.route({
      templateUrl: 'user/views/login.html', controller: 'loginController', controllerUrl: 'user/controllers/loginController', contentOnlyLayout : true
  }))
  .when("/", angularAMD.route({
      templateUrl: 'user/views/login.html', controller: 'loginController', controllerUrl: 'user/controllers/loginController', contentOnlyLayout : true
  }))
  //Logout routing
 .when("/logout", angularAMD.route({
      templateUrl: 'user/views/login.html', controller: 'loginController', controllerUrl: 'user/controllers/loginController', contentOnlyLayout : true
  }))
  //Register routing
 .when("/register", angularAMD.route({
      templateUrl: 'user/views/register.html', controller: 'registerController', controllerUrl: 'user/controllers/registerController', contentOnlyLayout : true
  }))
 //Forget Pin routing
 .when("/forget-pin", angularAMD.route({
      templateUrl: 'user/views/forgotPin.html', controller: 'userController', controllerUrl: 'user/controllers/userController', contentOnlyLayout : true
  }))
 //Change Pin routing
 .when("/change-pin", angularAMD.route({
      templateUrl: 'user/views/changePin.html', controller: 'userController', controllerUrl: 'user/controllers/userController', contentOnlyLayout : true
  }))
 //Activate routing
 .when("/activate/:code", angularAMD.route({
      templateUrl: 'user/views/login.html', controller: 'loginController', controllerUrl: 'user/controllers/loginController', contentOnlyLayout : true
  }))
  //404 routing
  .when("/404", angularAMD.route({
      templateUrl: 'common/views/404.html', controller: 'commonController', controllerUrl: 'common/controllers/commonController', contentOnlyLayout : true
  }))
  //403 routing
  .when("/403", angularAMD.route({
      templateUrl: 'common/views/403.html', controller: 'commonController', controllerUrl: 'common/controllers/commonController', contentOnlyLayout : true
  }))
  //Profile routing
  .when("/profile", angularAMD.route({
      templateUrl: 'common/views/comingsoon.html', controller: 'userController', controllerUrl: 'user/controllers/userController'
  }))
  //Caretaker routing
  .when("/caretaker", angularAMD.route({
      templateUrl: 'common/views/comingsoon.html', controller: 'userController', controllerUrl: 'user/controllers/userController'
  }))
  //Dashboard routing
  .when("/home", angularAMD.route({
      templateUrl: 'dashboard/views/dashboard.html', controller: 'dashboardController', controllerUrl: 'dashboard/controllers/dashboardController'
  }))
  //chatwithcaretaker routing
  .when("/chatwithcaretaker", angularAMD.route({
      templateUrl: 'chatwithcaretaker/views/chatwithcaretaker.html', controller: 'chatwithcaretakerController', controllerUrl: 'chatwithcaretaker/controllers/chatwithcaretakerController'
  }))
  //affirmation routing
  .when("/affirmation", angularAMD.route({
      templateUrl: 'common/views/comingsoon.html', controller: 'commonController', controllerUrl: 'common/controllers/commonController', contentOnlyLayout : true
  }))
  //chatwithcaretaker routing
  .when("/guidedmeditation", angularAMD.route({
      templateUrl: 'common/views/comingsoon.html', controller: 'commonController', controllerUrl: 'common/controllers/commonController', contentOnlyLayout : true
  }))
  //experts routing
  .when("/experts", angularAMD.route({
      templateUrl: 'experts/views/landing.html', controller: 'expertsController', controllerUrl: 'experts/controllers/expertsController'
  }))
  //products routing
  .when("/products", angularAMD.route({
      templateUrl: 'common/views/comingsoon.html', controller: 'commonController', controllerUrl: 'common/controllers/commonController', contentOnlyLayout : true
  }))
  //services routing
  .when("/services", angularAMD.route({
      templateUrl: 'common/views/comingsoon.html', controller: 'commonController', controllerUrl: 'common/controllers/commonController', contentOnlyLayout : true
  }))
  //Default routing
  .otherwise({redirectTo: "/404"});
}]);
app.run(['$rootScope', '$location', '$window', '$timeout', '$route', function($rootScope, $location, $window, $timeout, $route) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      $rootScope.pageLoaded = false;
      $rootScope.contentOnlyLayout = ($route.routes[$location.path()] && $route.routes[$location.path()].contentOnlyLayout) ? true : false;
    });

    $rootScope.$on('$routeChangeSuccess', function() {
      $timeout(function() {
        $rootScope.pageLoaded = true;      
      }, 200);
       
      $window.scrollTo(0,0);
    });
    $rootScope.$on('$routeChangeError', function() {
      $timeout(function() {
        $rootScope.pageLoaded = true;
      }, 200);
    });
  }]);
  return angularAMD.bootstrap(app);
});

