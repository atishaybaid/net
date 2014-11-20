
var employeeApp = angular.module("employeeApp",['ngGrid','ngRoute']);

employeeApp.config(['$routeProvider',
	function ($routeProvider) {
		// body...
		$routeProvider.
			when('/form',{
				templateUrl:'../partials/form.html',
				controller:'mainController'
			}).
			when('/gridView',{
				templateUrl:'../partials/gridView.html',
				controller:'viewController'
			}).
			otherwise({
				redirectTo:'/form',

			});

	}]);




employeeApp.config(["$httpProvider",function($httpProvider){
	$httpProvider.interceptors.push(function($q){
		return {
	
    // optional method
    'request': function(config) {
      // do something on success

      console.log("inside request");
      return config;

    },

    // optional method
   'requestError': function(rejection) {
      // do something on error

       console.log("inside requestError");

      if (canRecover(rejection)) {
        return responseOrNewPromise
      }
      return $q.reject(rejection);
    },



    // optional method
    'response': function(response) {
      // do something on success
       console.log("inside response");
      return response;
    },

    // optional method
   'responseError': function(rejection) {
      // do something on error
       console.log("inside requestError");
      if (canRecover(rejection)) {
        return responseOrNewPromise
      }
      return $q.reject(rejection);
    }
  };
});
}]);