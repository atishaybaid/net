
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


var HEADER_NAME = 'MyApp-Handle-Errors-Generically';
var specificallyHandleInProgress = false;

employeeApp.config(['$provide', '$httpProvider', function($provide, $httpProvider){
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
		    'response': function(data,status, headers, config) {
		      // do something on success

		       console.log("inside response");
		       console.log(data.data);
		       return data;

		    },

	        

	        specificallyHandled: function(specificallyHandledBlock) {
	            specificallyHandleInProgress = true;
	            try {
	            	console.log("inside specificallyHandled");
	            	console.log(specificallyHandledBlock);
	                return specificallyHandledBlock();
	            } finally {
	                specificallyHandleInProgress = false;
	            }
        	},

        	responseError: function(rejection) {
	            var shouldHandle = (rejection && rejection.config && rejection.config.headers
	                && rejection.config.headers[HEADER_NAME]);
	 
	            if (shouldHandle) {
	                // --- Your generic error handling goes here ---
	                console.log("something went wrong");
	            }
	 
	            return $q.reject(rejection);
        	}



        };
   });


	 function addHeaderToConfig(config) {
        config = config || {};
        config.headers = config.headers || {};
 
        // Add the header unless user asked to handle errors himself
        if (!specificallyHandleInProgress) {
            config.headers[HEADER_NAME] = true;
        }
 
        return config;
     }
 
    // The rest here is mostly boilerplate needed to decorate $http safely
    $provide.decorator('$http', ['$delegate', function($delegate) {
        function decorateRegularCall(method) {
            return function(url, config) {
                return $delegate[method](url, addHeaderToConfig(config));
            };
        }
 
        function decorateDataCall(method) {
            return function(url, data, config) {
                return $delegate[method](url, data, addHeaderToConfig(config));
            };
        }
 
        function copyNotOverriddenAttributes(newHttp) {
            for (var attr in $delegate) {
                if (!newHttp.hasOwnProperty(attr)) {
                    if (typeof($delegate[attr]) === 'function') {
                        newHttp[attr] = function() {
                            return $delegate.apply($delegate, arguments);
                        };
                    } else {
                        newHttp[attr] = $delegate[attr];
                    }
                }
            }
        }
 
        var newHttp = function(config) {
            return $delegate(addHeaderToConfig(config));
        };
 
        newHttp.get = decorateRegularCall('get');
        newHttp.delete = decorateRegularCall('delete');
        newHttp.head = decorateRegularCall('head');
        newHttp.jsonp = decorateRegularCall('jsonp');
        newHttp.post = decorateDataCall('post');
        newHttp.put = decorateDataCall('put');
 
        copyNotOverriddenAttributes(newHttp);
 
        return newHttp;
    }]);




}]);