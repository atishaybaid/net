var settingCtrl = timelyApp.controller("settingCtrl",function($scope,userSetting,Weather){

	console.log(userSetting.userSetting);

	$scope.submit=function(){
		userSetting.save($scope.location);
		console.log($scope.location);
		userSetting.retrieve();

	};

	
	$scope.fetchCities = Weather.getCityDetails;
	// body...
});