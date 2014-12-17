var mainCtrl = timelyApp.controller("mainCtrl",function ($scope,$timeout,Weather,userSetting) {
	
	$scope.date = {};
	$scope.weather = {};

	var updateTime = function(){

		$scope.date.currentTime = new Date();
		$timeout(updateTime,1000);

	};

	var locationObj = userSetting.retrieve();
	console.log(locationObj.location);

	Weather.getWeatherForecast(locationObj.location)
	.then(function(data){
		console.log(data);
		$scope.weather.forecast = data;
	});




	updateTime();

});