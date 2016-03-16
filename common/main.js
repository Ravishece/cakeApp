require.config({
    baseUrl: "./",
    
    // alias libraries paths.  Must set 'angular'
    paths: {
        'angular': 'theme/js/plugins/angular/angular.min',
        'angular-route': 'theme/js/plugins/angular/angular-route.min',
        'angularAMD': 'theme/js/plugins/angular/angularAMD.min',
        'angular-cookies': 'theme/js/plugins/angular/angular-cookies.min',
        'underscore': 'theme/js/plugins/underscore/underscore-min',
        'angular-validator': 'theme/js/plugins/angular/angular-validator.min',
        'messages': 'common/utility/messages',
        'constants': 'common/utility/constants',
        'config': 'common/utility/config',
        'restapi': 'common/utility/restapi',
        'responseHandler': 'common/utility/responseHandler',
        'dal': 'common/utility/dal',
        'bus': 'common/utility/bus',
        'app': 'common/router/route'
    },
    
    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
        'angular-cookies': ['angular'],
        'angular-validator': ['angular'],
        'underscore': {
          exports: '_'
        },
    },

    //urlArgs: "version=1.0",
    //urlArgs: "version=1.0" + (+new Date),
    
    // kick start application
    deps: ['app']
});
define("global", ['underscore'], function(_) {
      window._ = _;
});