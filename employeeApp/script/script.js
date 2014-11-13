
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