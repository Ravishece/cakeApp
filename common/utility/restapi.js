define([], function () {
	return restapi  = {
            //user
            login : {url:'joybox/login', method:'post'},
            logout : {url:'joybox/logout', method:'post'},
            register : {url:'joybox/signup', method:'post'},
            changepin : {url:'joybox/changepin', method:'post'},
            forgotpin : {url:'joybox/forgotpin', method:'post'}
      }
});