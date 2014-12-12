var timelyApp = angular.module("timelyApp",['ngRoute']);

timelyApp.config(['$routeProvider',function($routeProvider){
	console.log("inside routeProvider");
	$routeProvider.
	when('/home',{
		//console.log("inside home");
		templateUrl:'js/partials/home.html',
		controller:'mainCtrl'
	}).
	when('/setting',{
		templateUrl:'js/partials/settingScreen.html',
		controller:'mainCtrl'
	}).
	otherwise({
		redirectTo:'/home'
	});

}]);