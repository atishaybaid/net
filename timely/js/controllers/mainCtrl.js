var mainCtrl = timelyApp.controller("mainCtrl",function ($scope,$timeout,Weather) {
	
	$scope.date = {};

	var updateTime = function(){

		$scope.date.currentTime = new Date();
		$timeout(updateTime,1000);

	};

	Weather.getWeatherForecast("CA/San_Francisco")
	.then(function(data){
		console.log(data);
	});




	updateTime();

});